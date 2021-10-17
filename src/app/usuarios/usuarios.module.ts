import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';



@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
