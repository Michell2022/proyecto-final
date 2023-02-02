import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { BreakingComponent } from './pages/breaking/breaking.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarUsuarioComponent } from './pages/registrar-usuario/registrar-usuario.component';

const routes: Routes = [

  { path:'home', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'listaProducto', component:ListaProductoComponent },
  { path:'registrousuario', component:RegistrarUsuarioComponent },
  { path:'404', component:BreakingComponent },
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'**', component:BreakingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
