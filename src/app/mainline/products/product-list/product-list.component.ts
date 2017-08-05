import { Component,  CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { FirebaseService } from '../../../services/firebase.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Vendortype } from  '../../interface/vendortype';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(private _auth:AuthService, private _firebaseService: FirebaseService, private _route: ActivatedRoute,
  private _router: Router) { }

  ngOnInit() {

     this._firebaseService.getProducts().subscribe(products => {
     console.log(products);
   this.products = products;
  });
  
  
  }

}
