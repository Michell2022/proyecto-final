import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';
import { emailValidator } from './email-validator.directive';

interface IUser {
  email: string;
  password: string;
  showPassword: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin!:FormGroup;
  user: IUser;

  constructor(private usuarioService:UserServiceService, private router:Router){
    this.user = {} as IUser;
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
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
    return this.formLogin.get('email')!;
  }

  get password() {
    return this.formLogin.get('password')!;
  }

  public validate(): void {
    if (this.formLogin.invalid) {
      for (const control of Object.keys(this.formLogin.controls)) {
        this.formLogin.controls[control].markAsTouched();
      }
      return;
    }
    this.user = this.formLogin.value;
    console.info('Email:', this.user.email);
    console.info('Password:', this.user.password);


    this.usuarioService.login(this.formLogin.value)
    .then(
      response => {

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
          title: 'Sesión iniciada'
        })

        this.router.navigate(['/home'])
        console.log(response);
      }
    )
    .catch(error => console.log(error));
  }


  registrarse(){
    this.router.navigate(['/registrousuario']);
  }

}
