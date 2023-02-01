import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreakingComponent } from './breaking/breaking.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreakingComponent,
    CrearProductoComponent,
    ListaProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
