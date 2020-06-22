import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './components/menu/menu.component';
import { PrincipalComponent } from './components/principal/principal.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MenuComponent, PrincipalComponent ],
  bootstrap:    [ PrincipalComponent ]
})
export class AppModule { }
