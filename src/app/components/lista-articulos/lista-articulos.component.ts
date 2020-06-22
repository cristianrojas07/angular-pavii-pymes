import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from '../../models/articulosfamilias';
import { ArticulosFamilias } from '../../models/articulosfamilias.coleccion';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {
  
  articuloFamilia: ArticuloFamilia[];
  constructor() { }

  ngOnInit(): void {
      this.articuloFamilia = ArticulosFamilias;
  }

}
