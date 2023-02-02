import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { Productos } from '../interfaces/interface';
import { addDoc, collection, deleteDoc, doc} from 'firebase/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor(private firestore:Firestore) { }

  //METODOS PARA EL CRUD
  getProducto():Observable<Productos[]>{
    //EN articuloRef TRAERE TODA LA COLECCION DE MI BASE DE DATOS DE articulos.
    const productoRef = collection(this.firestore, 'producto');
    //TRAIGO LA collectionData DE LA referenciaRef Y LAS ORDENO POR EL CAMPO id POR MEDIO DE UN ARREGLO.
    return collectionData(productoRef, {idField:'id'}) as Observable<Productos[]>
  
  }

  // AGREGAR UN NUEVO PRODUCTO A MI BASE DE DATOS
  addProducto(producto: Productos) {
    const productoRef = collection(this.firestore, 'producto');
    return addDoc(productoRef, producto);
  }

  //ELIMINAR EL doc DE ESTA BASE DE DATOS CON EL id.
  deleteArticulo(producto: Productos) {
    const productoRef = doc(this.firestore, `producto/${producto.id}`)
    return deleteDoc(productoRef);
  }

}
