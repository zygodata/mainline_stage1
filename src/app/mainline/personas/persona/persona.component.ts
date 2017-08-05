import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../../../services/persona.service';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { ProductComponent } from '../../products/product/product.component'
import { Persona } from '../../interface/persona'

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

@Input('persona')   persona: any;

@Output() personaa = new EventEmitter();

  personas = [];
  fbpersona = [];
  id: any;

  
onClickOutput() {
 this.personaa.emit();

}





  constructor(private _personaService: PersonaService, private _route: ActivatedRoute) {

    
   }
 
  ngOnInit() {

   // this.id = this._route.snapshot.params['id'];

//this._personaService.onAddPersona(this.id);




     this._personaService.getPersonas().subscribe(personas => {
     console.log(personas);
   this.personas = personas;
  });
  }
 
 onAddPersona() {
   this._personaService.addPersonas(this.id);


 }

}

