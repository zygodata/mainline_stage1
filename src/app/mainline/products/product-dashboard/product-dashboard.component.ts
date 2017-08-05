import { Component,  CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { FirebaseService } from '../../../services/firebase.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Vendortype } from  '../../interface/vendortype';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../interface/product';
import { Message, SelectItem, DataTableModule } from 'primeng/primeng';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

 products: any;
 //products: Product[];
 cols: any;   
 msgs: Message[] = [];




  constructor(private _auth:AuthService, private _firebaseService:FirebaseService, private _router:Router) {



   }

  ngOnInit() {
  

 this._firebaseService.getProducts().subscribe(products => {
     console.log(products);
   this.products = products;
    });


  
this.cols = [
            {field: 'companyname', header: 'Company Name'},
            {field: 'prodname', header: 'Product Name'},
            {field: 'prodcat', header: 'Product Category'},
            {field: 'mltechcontact', header: 'Mainline Contact'},
          
        ];

}

update(dt) {
  dt.reset();
}

  onDetails(){
    this._router.navigate(['product-list']);
  }
 //onAlert(){
  //alert("Hello World")};
}

{
  
}



