import { Component,  CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { FirebaseService } from '../../../services/firebase.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Vendortype } from  '../../interface/vendortype';
import { Router } from '@angular/router';
import { RadioButtonModule, InputTextareaModule } from 'primeng/primeng';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  sfdclink = 'https://na20.salesforce.com/00Oa0000007bhRo';

public zvendor: Vendortype;

public vtypes = [
  {value: 'Application Management', display:'Application Management'},
  {value: 'Automation and Orchestration', display:'Automation and Orchestration'},
  {value: 'Cloud', display:'Cloud'},
  {value: 'Cloud Services', display:'Cloud Services'},
  {value: 'Containers', display:'Containers'},
  {value: 'Data Management', display:'Data Management'},
  {value: 'Data Protection ', display:'Data Protection '},
  {value: 'Database Software', display:'Database Software'},
  {value: 'Distributor', display:'Distributor'},
  {value: 'Hyper-Converged', display:'Hyper-Converged'},
  {value: 'Information Analytics', display:'Information Analytics'},
  {value: 'Managed Service Provider', display:'Managed Service Provider'},
  {value: 'Networking', display:'Networking'},
  {value: 'Networking Components', display:'Networking Components'},
  {value: 'Open Source', display:'Open Source'},
  {value: 'Open Source Database Software', display:'Open Source Database Software'},
  {value: 'Open Stack', display:'Open Stack'},
  {value: 'Operating System', display:'Operating System'},
  {value: 'Performance Management', display:'Performance Management'},
  {value: 'Power Protection', display:'Power Protection'},
  {value: 'Printers', display:'Printers'},
  {value: 'Services', display:'Services'},
  {value: 'Security', display:'Security'},
  {value: 'Servers', display:'Servers'},
  {value: 'Software', display:'Sofware'},
  {value: 'Software License Management', display:'Software License Management'},
  {value: 'Storage', display:'Storage'},
  {value: 'Undefined', display:'Undefined'},
  {value: 'Virtual Desktop', display:'Virtual Desktop'},


]
 
 public slists = [
  {value: 'Direct', display:'Direct'},
  {value: 'Distribution', display:'Distribution'},
  {value: 'Direct and Distribution', display:'Direct and Distribution'},
  {value: 'No Relationship', display: 'No Relationshiop'},

 ]

  public conditions = [
  {value: 'Not Approved Supplier', display:'Not Approved Supplier'},
  {value: 'Approved Supplier', display:'Approved Supplier'},
  {value: 'Supplier with Agreement', display:'Supplier with Agreement'},
  {value: 'Agreement Terminated', display:'Agreement Terminated'},
  {value: 'Status Unknown', display: 'Status Unknown'},
  {value: 'Under Consideration', display: 'Under Consideration'}
 ]

 public prconditions = [

  {value: 'No', display:'No'},
  {value: 'Yes', display:'Yes'},
  {value: 'Unknown', display:'Unknown'},
  {value: 'Pending', display: 'Pending'},


 ]

  currentRate = 8;

  //These properties get bound to the DOM 

  companyname: any;
  companytype: any;
  source: any;
  url: any;
  notes: any;
  mlcontact: any;
  vncontact: any;
  dicompany: any;
  dicontact: any;
  mlstatus: any;
 prstatus: any;
 revyear: any;

  vendorForm: FormGroup;
 // additems: FormArray;



  constructor(private _auth:AuthService, private _firebaseService: FirebaseService, private _formBuilder:FormBuilder, private _router:Router) {
    }

  ngOnInit() {

    {
this.zvendor = {
  vtype: null,
}
    
    }

    this.vendorForm = this._formBuilder.group({
      companyname: ['', Validators.required] ,
      companytype: ['', Validators.required] ,
      source: ['', Validators.required] ,
      url: ['', Validators.required] ,
      notes:'',
      details:  this._formBuilder.group({  //child FormGroup for second row in DOM
      mlcontact: ['', Validators.required] ,
      vncontact: '' ,
      dicompany: '',
      dicontact: '',
      mlstatus: ['', Validators.required] ,
      prstatus: ['', Validators.required,] ,
      revyear: '',
          }),

      //additems: this._formBuilder.group({
     
        });
  }

onSubmit() {

  console.log(this.vendorForm.value);

//Create an object to use with the onSumbit() method to save the form into Firebase


const {companyname, companytype, source, url, notes} = this.vendorForm.value;
const { mlcontact,vncontact,dicompany,dicontact, mlstatus, prstatus, revyear} = this.vendorForm.value.details;

let formReqeust = { companyname, companytype, source, url, notes,  mlcontact,vncontact,dicompany,dicontact, mlstatus, prstatus, revyear }
this._firebaseService.addVendor(formReqeust)

  //let newco = {
  
   // companyname: this.companyname,
   // companytype: this.companytype,
  //  source: this.source,
  //  url: this.url,
   // notes: this.notes,
  //  mlcontact: this.mlcontact,
    //vncontact: this.vncontact,
    //dicompany: this.dicompany,
    //dicontact: this.dicontact,
  //  mlstatus: this.mlstatus,
    //prstatus: this.prstatus,
   // revyear: this.revyear,

 // }
  
  //Pass the item object into into the funtcion addVendor() in the FirbaseService
// this._firebaseService.addVendor(newco);
//console.log(newco);

//then redirect to the vendor dashboard to verify the new vendor entry worked
this._router.navigate(['dashboard']);



}


}

