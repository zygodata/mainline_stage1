import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../services/persona.service';
import { Form, FormControl, FormGroup, FormArray, FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { TabViewModule, InputTextareaModule } from 'primeng/primeng';


@Component({
  selector: 'app-persona-add',
  templateUrl: './persona-add.component.html',
  styleUrls: ['./persona-add.component.css']
})
export class PersonaAddComponent implements OnInit {

  personaname?: any;
  personas: any;

 personaForm: FormGroup;

  constructor(private _personaService: PersonaService, private _formBuilder: FormBuilder) { }

  ngOnInit() {

this._personaService.getPersonas().subscribe( personas =>
  this.personas = personas);
  console.log(this.personas); {

  }


 this.personaForm = this._formBuilder.group({

    personaname: '',
  });


}

onSubmit(){

  const{ personaname} = this.personaForm.value;

  let formRequest = { personaname };

  this._personaService.addPersonas(formRequest);

}


 
}
    
  