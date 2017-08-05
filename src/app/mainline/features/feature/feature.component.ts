import { Component, OnInit, Input } from '@angular/core';
import { Form, FormControl, FormGroup, FormArray, FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { PersonaService } from '../../../services/persona.service';
import { Features } from  '../../interface/features';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

 

  name = 'Feature Name';
  category = 'Feature Category';
  description = 'Feature Description';

  featurename: string;

  featureForm: FormGroup;

  

  constructor(private _formBuilder: FormBuilder, private _personaService: PersonaService) { 

    
  }

  ngOnInit() {

    this.featureForm = this._formBuilder.group({

      featurename: '',


    });
  }
  
  ngOnSubmit(){


    const {featurename} = this.featureForm.value;

    let formRequest = {featurename};

    this._personaService.addFeature(formRequest);
    console.log(formRequest);

  }
}
