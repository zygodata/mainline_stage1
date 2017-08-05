import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from '../../../services/firebase.service';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  //These properties get bound to the DOM 

  company: any;
  contact: any;
  item: any;
  itemcat: any;

  vendorForm: FormGroup;
  additems: FormArray;

  constructor(private _firebaseService: FirebaseService, private _formBuilder:FormBuilder) { }

  ngOnInit() {

    this.vendorForm = this._formBuilder.group({
      company: '' ,
      contact: '',
      additems: this.buildArray(),
      });
  }

buildArray(){
this.additems = this._formBuilder.array({
  this.buildGroup()
 });
return this.additems;
}

buildGroup(): FormGroup  {
  return this._formBuilder.group({
      item: '',
      itemcat: '',
      });

 }

}



onSubmit() {

  console.log(this.vendorForm.value);

//Create an object to use with the onSumbit() method to save the form into Firebase

  let newco = {
  
    company: this.company,
    contact: this.contact,
    item: this.item,
    itemcat: this.itemcat,

  }
  
  //Pass the item object into into the funtcion addVendor() in the FirbaseService
 this._firebaseService.addVendor(newco);
console.log(newco);



}


