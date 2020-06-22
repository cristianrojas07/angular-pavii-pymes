import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
        {path:'articulos', component: ListaArticulosComponent},
        {path:'inicio', component:InicioComponent},
        {path:'', redirectTo:'inicio', pathMatch: 'full'}
    ])
  ],
  declarations: [ MenuComponent, PrincipalComponent, ListaArticulosComponent, InicioComponent ],
  bootstrap:    [ PrincipalComponent ]
})
export class AppModule { }
