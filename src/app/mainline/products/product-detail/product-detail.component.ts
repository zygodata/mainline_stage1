import { Component,  CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { FirebaseService } from '../../../services/firebase.service';
import { PersonaService } from '../../../services/persona.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Vendortype } from  '../../interface/vendortype';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any;
  product: any;
  personas: any;

  sfdclink = 'https://na20.salesforce.com/00Oa0000007bhRo';


  constructor(private _auth:AuthService, private _firebaseService: FirebaseService, private _route: ActivatedRoute,
  private _router: Router, private _personaService: PersonaService) { }

  ngOnInit() {

     //get id for vendor
    this.id = this._route.snapshot.params['id'];

    this._firebaseService.getProductDetails(this.id).subscribe(product => {
      this.product = product;
      console.log(product);
    });

this._personaService.getPersonas().subscribe(personas =>  {
this.personas = personas;
console.log(personas)
 });

  }


onDeleteClick() {
this._firebaseService.deleteProducts(this.id);
this._router.navigate(['product-dashboard']);

}



  }

  




