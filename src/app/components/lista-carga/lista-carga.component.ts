import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { ArticulosFamilias } from '../../models/articulosfamilias.coleccion';

@Component({
  selector: 'app-lista-carga',
  templateUrl: './lista-carga.component.html',
  styleUrls: ['./lista-carga.component.css']
})
export class ListaCargaComponent implements OnInit {

  fg: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
        IdArticuloFamilia: [''],
        Nombre: ['']
    })
  }

  grabar(){
    ArticulosFamilias.push({
        IdArticuloFamilia: Number(this.fg.value.IdArticuloFamilia), 
        Nombre: this.fg.value.Nombre 
    });
  }

}
