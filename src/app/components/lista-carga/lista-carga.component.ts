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
        IdArticuloFamilia: ['', [Validators.required, Validators.maxLength(5), Validators.pattern('^[0-9]*$')]],
        Nombre: ['', [Validators.required]]
    })
  }

  grabar(){
    if(this.fg.valid){
        ArticulosFamilias.push({
            IdArticuloFamilia: Number(this.fg.value.IdArticuloFamilia), 
            Nombre: this.fg.value.Nombre 
        });
        window.alert("Articulo Agregado");
    }else{
        window.alert("Ingrese un valor");
    }
  }

  limpiar(){
    this.fg.reset();
  }
}
