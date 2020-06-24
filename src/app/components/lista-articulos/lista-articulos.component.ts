import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from '../../models/articulosfamilias';
import { ArticulosFamilias } from '../../models/articulosfamilias.coleccion';
import { ArticulosFamiliasService } from '../../services/articulos-familias.service';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css'],
  providers: [ArticulosFamiliasService]
})
export class ListaArticulosComponent implements OnInit {
  
  articuloFamilia: ArticuloFamilia[];
  constructor(private articulosFamilias: ArticulosFamiliasService) { }

  ngOnInit(): void {
      //this.articuloFamilia = this.articulosFamilias.getArticulosFamilias();
      this.articulosFamilias.getArticulosFamilias().subscribe({ 
        next: articuloFamilias => this.articuloFamilia = articuloFamilias,
        error: err => console.log(err)
      });
  }

}
