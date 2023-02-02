import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CrearProductoComponent,
    ListaProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CrearProductoComponent,
    ListaProductoComponent,
    EditarProductoComponent
  ]
})
export class ComponentsModule { }
