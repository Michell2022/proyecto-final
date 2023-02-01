import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { BreakingComponent } from './breaking/breaking.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductosComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    BreakingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
