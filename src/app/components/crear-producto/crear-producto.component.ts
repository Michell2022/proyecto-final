import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductosServiceService } from 'src/app/services/productos-service.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit{

  productoForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private dialogRef: MatDialogRef<CrearProductoComponent>,
    private producService:ProductosServiceService,
    @Inject(MAT_DIALOG_DATA) public data:any){

    // MEDIANTE MI VARIABLE articleForm OBTENGO LOS VALORES DE MI FORMULARIO.
    this.productoForm = new FormGroup({
      codigo: new FormControl(),
      nombre: new FormControl(),
      precio: new FormControl(),
      oferta: new FormControl(),
      stock: new FormControl(),
      descripcion: new FormControl(),
      imagen: new FormControl(),
      marca: new FormControl(),
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    const response = this.producService.addProducto(this.productoForm.value);
    console.log(response);
    this.dialogRef.close();
  }

  cancelar(){
    this.dialogRef.close();
  }

}
