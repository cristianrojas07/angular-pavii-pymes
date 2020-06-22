import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './components/menu/menu.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MenuComponent, PrincipalComponent, ListaArticulosComponent ],
  bootstrap:    [ PrincipalComponent ]
})
export class AppModule { }
