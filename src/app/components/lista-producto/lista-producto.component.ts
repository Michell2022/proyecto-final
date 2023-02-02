import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Productos } from 'src/app/interfaces/interface';
import { ProductosServiceService } from 'src/app/services/productos-service.service';
import Swal from 'sweetalert2';
import { CrearProductoComponent } from '../crear-producto/crear-producto.component';


@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit{

  //Mi VARIABLE articulo TIENE LOS DATOS DE MI BD.
  listaproductos!:Productos[];

  constructor(private dialog:MatDialog, private producService:ProductosServiceService){ }

  ngOnInit(): void {
    this.producService.getProducto().subscribe(Producto => {
      this.listaproductos = Producto;
    })
  }

  agregarProducto(){
    this.dialog.open(CrearProductoComponent, {
      data: {}
    });
  }

  onClickDelete(producto:Productos){
    
    Swal.fire({
      title: 'Estas seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {

        //LOS DATOS SE ELIMINARAN SOLO SI DA EN SI
        const response = this.producService.deleteArticulo(producto)
        console.log(response);

        Swal.fire(
          'Eliminado!',
          'Su archivo ha sido eliminado.',
          'success'
        )
      }
    })
  }

}
