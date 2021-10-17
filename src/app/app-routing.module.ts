import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistroComponent } from './auth/pages/registro/registro.component';
import { ProductosModule } from './productos/productos.module';

const routes:Routes=[

  {
    path:'productos', loadChildren:()=> import('./productos/productos.module').then(m=>m.ProductosModule)
  },

  

  {
    path:'login', component:LoginComponent,
  },

  {
    path:'registro', component:RegistroComponent,
  },

  {
    path:'**', redirectTo:'login'
  }


  
]



@NgModule({

  imports: [

    RouterModule.forRoot(routes)

  ], 
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
