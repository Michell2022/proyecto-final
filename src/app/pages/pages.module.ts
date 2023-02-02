import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { BreakingComponent } from './breaking/breaking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { EmailValidatorDirective } from './login/email-validator.directive';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HomeComponent,
    ProductosComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    BreakingComponent,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    ProductosComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    BreakingComponent
  ]
})
export class PagesModule { }
