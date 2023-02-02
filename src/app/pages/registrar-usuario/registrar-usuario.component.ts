import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';
import { emailValidator } from '../login/email-validator.directive';

interface IUser {
  email: string;
  password: string;
  showPassword: boolean;
}

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit{

  formRegistroUser!:FormGroup;
  user: IUser;

  constructor(private usuarioService:UserServiceService, private router:Router){
    this.user = {} as IUser;
    this.formRegistroUser = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.formRegistroUser = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  get email() {
    return this.formRegistroUser.get('email')!;
  }

  get password() {
    return this.formRegistroUser.get('password')!;
  }

  onSubmit(){
    this.usuarioService.registerUser(this.formRegistroUser.value)
    .then(response => {
      console.log(response)


      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: '¡ Cuenta creada correctamente !'
      })


      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error))
  }


  iniciarSesion(){
    this.router.navigate(['/login']);
  }

}
