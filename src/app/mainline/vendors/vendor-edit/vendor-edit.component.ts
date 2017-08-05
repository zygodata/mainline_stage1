import { Component,  CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { FirebaseService } from '../../../services/firebase.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Vendortype } from  '../../interface/vendortype';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RadioButtonModule } from 'primeng/primeng';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

vendor: any;

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

 ]

  public conditions = [
  {value: 'Not Approved Supplier', display:'Not Approved Supplier'},
  {value: 'Approved Supplier', display:'Approved Supplier'},
  {value: 'Supplier with Agreement', display:'Supplier with Agreement'},
  {value: 'Agreement Terminated', display:'Agreement Terminated'},
  {value: 'Status Unknown', display: 'Status Unknown'},
 ]

 public prconditions = [

  {value: 'No', display:'No'},
  {value: 'Yes', display:'Yes'},
  {value: 'Unknown', display:'Unknown'},
  {value: 'Pending', display: 'Pending'},


 ]

  currentRate = 8;

  //These properties get bound to the DOM 

  id;
  companyname;
  companytype;
  source;
  url;
  notes;
  mlcontact;
  vncontact;
  dicompany;
  dicontact;
  mlstatus;
 prstatus;
 revyear;

  vendorForm: FormGroup;
 // additems: FormArray;



  constructor(private _auth:AuthService, private _firebaseService: FirebaseService, private _formBuilder:FormBuilder, 
  private _router:Router, private _route: ActivatedRoute) {
    }

  ngOnInit() {

    {
this.zvendor = {
  vtype: null,
}
    
    }

    this.vendorForm = this._formBuilder.group({
      companyname: [''] ,
      companytype: [''] ,
      source: [''] ,
      url: [''] ,
      notes:'',
      details:  this._formBuilder.group({  //child FormGroup for second row in DOM
      mlcontact: [''] ,
      vncontact: [''] ,
      dicompany: [''],
      dicontact: [''] ,
      mlstatus: [''] ,
      prstatus: [''] ,
      revyear: [''],
          })

      //additems: this._formBuilder.group({
     
      });
      
 this.id = this._route.snapshot.params['id'];

    this._firebaseService.getVendorDetails(this.id).subscribe(vendor => {
      this.vendor = vendor;
      console.log(vendor);

 this.companyname = vendor.companyname;
    this.companytype = vendor.companytype;
    this.source = vendor.source;
    this.url = vendor.url;
    this.notes= vendor.notes;
    this.mlcontact = vendor.mlcontact;
    this.vncontact = vendor.vncontact;
    this.dicompany = vendor.dicompany;
    this.dicontact = vendor.dicontact;
    this.mlstatus = vendor.mlstatus;
    this.prstatus = vendor.prstatus;
    this.revyear = vendor.revyear;




    });



  }

onEditSubmit() {

  console.log(this.vendorForm.value);

//Create an object to use with the onEditSumbit() method to save the form into Firebase


  
  const { companyname, companytype, source, url, notes } = this.vendorForm.value;
const {mlcontact, vncontact, dicompany, dicontact, mlstatus, prstatus, revyear } = this.vendorForm.value.details;

let editven = {
  
   companyname: this.companyname,
   companytype: this.companytype,
   source: this.source,
   url: this.url,
   notes: this.notes,
   mlcontact: this.mlcontact,
   vncontact: this.dicompany,
   dicontact: this.dicontact,
   mlstatus: this.mlstatus,
   prstatus: this.prstatus,
   revyear: this.revyear,
  
  }

this._firebaseService.updateVendor(this.id,editven);
console.log(editven);
//this.vendorForm.reset();





  //a let newco = {
  
   //a  companyname: this.companyname,
  //a   companytype: this.companytype,
  //a   source: this.source,
  //a  url: this.url,
   // notes: this.notes,
   //a  mlcontact: this.mlcontact,
    //vncontact: this.vncontact,
    //dicompany: this.dicompany,
    //dicontact: this.dicontact,
   //a mlstatus: this.mlstatus,
    //prstatus: this.prstatus,
   // revyear: this.revyear,

  //a}
  
  //Pass the item object into into the funtcion addVendor() in the FirbaseService
//a this._firebaseService.updateVendor(this.id, newco);
//a console.log(newco);

//then redirect to the vendor dashboard to verify the new vendor entry worked
this._router.navigate(['dashboard']);



}


}

