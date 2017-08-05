import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
//import { Persona } from '../mainline/interface/persona';
import { Fbpersona } from '../mainline/interface/fbpersona';
import { Subject } from 'rxjs/Subject';
import { Persona } from '../mainline/interface/persona';
import { Permodal} from '../mainline/interface/permodal';
import { Features } from '../mainline/interface/features';


@Injectable()
export class PersonaService {

fbpersona: FirebaseListObservable<any[]>;
fbpersonas: FirebaseListObservable<any[]>;
fbfeatures: FirebaseListObservable<any[]>;
 

 //private personas = [
   // {description: 'Backup', type: 'Data Management'},
    //{description: 'Archive', type: 'Data Management'},
    //{description: 'Data Masking', type: 'Security'},
    //{description: 'Wireless Networking', type: 'Networking'},
  //];




private personas: Persona[] = [];

private collection: Permodal [] = [];







  //getPersonas(){
    //return this.personas;

  //}


   getPersonas() {
  this.fbpersonas = this._afdb.list('/persona') as
  FirebaseListObservable<Persona[]>
  return this.fbpersonas;
}

getPersona() {
 return this.personas;
}

  addPersona(persona){
    if(this.personas.indexOf(persona) !== -1) {
    return;
  }
//this.personas.push(persona);

  }

  constructor(private _afdb:AngularFireDatabase) {

   }



  addPersonas(formRequest){
  this.fbpersona = this._afdb.list('/persona') as 
  FirebaseListObservable<Fbpersona[]>
  return this.fbpersona.push(formRequest)
  .then(
    () => console.log('Push Worked'),
    console.error);
 
  }

onAddPersona(persona) {
  this.fbpersona = this._afdb.list( '/product/persona ') as
  FirebaseListObservable<Persona[]>
    return this.fbpersona.push(persona)
    .then(
      () => console.log('Push Worked'),
      console.error);

    
  }

addToCollection(persona) {
  this.fbpersona = this._afdb.list('/product') as
  FirebaseListObservable<any[]>
  return this.fbpersona.push(persona)
  .then (
    () => console.log('Push Worked'),
    console.error);

  }
//This will connect to the button in the "Persona - Direct Tab"
addToPersona(persona: Permodal)  {
  if (this.collection.indexOf(persona) !== -1) {
    return;
  }

  this.collection.push(persona);
}
 
 addFeature(formRequest){
  this.fbfeatures = this._afdb.list('/features') as 
  FirebaseListObservable<any[]>
  return this.fbfeatures.push(formRequest)
  .then(
    () => console.log('Push Worked'),
    console.error);
 
  }


  }



