import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaCargaComponent } from './components/lista-carga/lista-carga.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {path:'articulos', component: ListaArticulosComponent},
        {path:'inicio', component:InicioComponent},
        {path:'cargar', component:ListaCargaComponent},
        {path:'', redirectTo:'inicio', pathMatch: 'full'}
    ])
  ],
  declarations: [ MenuComponent, PrincipalComponent, ListaArticulosComponent, InicioComponent, ListaCargaComponent ],
  bootstrap:    [ PrincipalComponent ]
})
export class AppModule { }
