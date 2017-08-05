import { Component,  CUSTOM_ELEMENTS_SCHEMA, OnInit, Input } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { FirebaseService } from '../../../services/firebase.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Vendortype } from  '../../interface/vendortype';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RadioButtonModule, CheckboxModule, MultiSelectModule, SelectItem, InputTextareaModule, TabViewModule } from 'primeng/primeng';
import { PersonaComponent} from '../../personas/persona/persona.component';
import { PersonaService } from '../../../services/persona.service';
import { Persona } from '../../interface/persona';
import { Permodal } from '../../interface/permodal';
import { Subject } from 'rxjs/Subject';
import { FeatureComponent } from '../../Features/feature/feature.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  features: FormArray;
  //platforms: string [] = [];
 //platforms: FormArray;


product: any;

  sfdclink = 'https://na20.salesforce.com/00Oa0000007bhRo';

public zvendor: Vendortype;

public vtypes = [
  {value: 'Application Management', display:'Application Management'},
  {value: 'Automation and Orchestration', display:'Automation and Orchestration'},
  {value: 'Cloud NAS Gateways', display:'Cloud NAS Gateways'},
  {value: 'Cloud Management', display:'Cloud Management'},
  {value: 'Cloud Services', display:'Cloud Services'},
  {value: 'Containers', display:'Containers'},
  {value: 'Copy Data Management', display:'Copy Data Management'},
  {value: 'Data Management', display:'Data Management'},
  {value: 'Data Protection ', display:'Data Protection '},
  {value: 'Database Software', display:'Database Software'},
  {value: 'DevOps', display:'DevOps'},
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
  {value: 'Professional Services', display:'Professional Services'},
  {value: 'Security', display:'Security'},
  {value: 'Server Adapters', display:'Server Adapters'},
  {value: 'Servers', display:'Servers'},
  {value: 'Software License Management', display:'Software License Management'},
  {value: 'Storage', display:'Storage'},
  {value: 'Undefined', display:'Undefined'},
  {value: 'Virtual Desktop', display:'Virtual Desktop'},
]
 
  currentRate = 8;

  //These properties get bound to the DOM 

  id;
  companyname;
  companytype;
  url;
  details: any;
  mltechcontact:any;
  prodname: any;
  prodver: any;
  prodcat: any;
  prodcat2: any;
  proddescrip: any;
  prodnotes: any;
  details2: any;
  personaname2: any;
  featurename: any;
  platformname: any;
  featurecat: any;
  featuredescrip: any;


  vendorForm: FormGroup;
  
 prods: SelectItem[];

 selectedProds: string[] = [];

 personas: any;


onTestAdd(){
  alert("Hello");
}


  constructor(private _auth:AuthService, private _firebaseService: FirebaseService, private _formBuilder:FormBuilder, 
  private _router:Router, private _route: ActivatedRoute, private _personaService: PersonaService ) {


this.prods = [];
this.prods.push({label: "Backup", value: "Backup"});
this.prods.push({label: "Archive", value: "Archive"});
this.prods.push({label: "VNA", value: "VNA"});

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
      //source: [''] ,
      url: [''] ,
      //notes:'',
      details:  this._formBuilder.group({  //child FormGroup for second row in DOM
      mltechcontact: ['', Validators.required] ,
      prodname: ['', Validators.required],
      prodver: [''],
      prodcat: [''],
      prodcat2: [''],
      proddescrip: ['']}),
      //prodnotes: [''],
      details2: this._formBuilder.group({
      personanotes: [''],
      personaname2: [''],
      features: this.buildArray(),
    
      })               
 
        });

  
 this.id = this._route.snapshot.params['id'];

    this._firebaseService.getVendorDetails(this.id).subscribe(product=> {
      this.product = product;
      console.log(product);

     this.companyname = product.companyname;
     this.companytype = product.companytype;
     this.url = product.url;
    // this.mltechcontact = product.mltechcontact;
    // this.prodname = product.prodname;
    // this.prodver = product.prodver;
    // this.prodcat = product.prodcat;
    // this.proddescrip = product.proddescrip;
    // this.prodnotes = product.prodnotes;
    this.featurename = product.featurename;
    this.featurecat = product.featurecat;
    this.featuredescrip = product.featuredescrip;

        
  });
  

   this._personaService.getPersonas().subscribe(personas => {
     this.personas = personas;
        console.log(personas);
  });
  
  
  }

onProdSubmit() {
  

 // console.log(this.vendorForm.value);
// Testing Firebase writes with Reactive Forms

const { companyname, companytype, url,  } = this.vendorForm.value;
const { mltechcontact, prodname, prodver, prodcat, prodcat2, proddescrip,} = this.vendorForm.value.details;
const { features} = this.vendorForm.value.details2;
let formRequest = {  companyname, companytype, url, mltechcontact, prodname, prodver, prodcat,
   prodcat2, proddescrip, features};

this._firebaseService.addProduct(formRequest);
this.vendorForm.reset();
this._router.navigate(['product-dashboard']);

}
  buildArray(): FormArray{
   this.features = this._formBuilder.array([
      this.buildGroup()
    ]);
return this.features;
  }

  buildGroup(): FormGroup {
    return this._formBuilder.group ({
      featurename: ['', Validators.required],
      featurecat: '',
      featuredescrip: '',

    });
  
  }

  /*buildPlatformArray(): FormArray {
    this.platforms = this._formBuilder.array([
      this.buildPlatformGroup ()
    ]);

  return this.platforms;
  }

  buildPlatformGroup(): FormGroup {
    return this._formBuilder.group ({
      platformname: [''],
    });
  }*/



  addFeature(){
    this.features.push(this.buildGroup());
  }
 
  featureSubmit(){

    const {features} = this.vendorForm.value.details2;
    let formSave= {features};

    this._firebaseService.addFeature(formSave);
    console.log(formSave);

  }

removeFeature(feature){
  this.features.removeAt(feature);
   console.log(feature);
}
 

}



// Code Repository

 //public slists = [
  //{value: 'Direct', display:'Direct'},
  //{value: 'Distribution', display:'Distribution'},
  //{value: 'Direct and Distribution', display:'Direct and Distribution'},

 //]

 // public conditions = [
 // {value: 'Not Approved Supplier', display:'Not Approved Supplier'},
 // {value: 'Approved Supplier', display:'Approved Supplier'},
 // {value: 'Supplier with Agreement', display:'Supplier with Agreement'},
 // {value: 'Agreement Terminated', display:'Agreement Terminated'},
 // {value: 'Status Unknown', display: 'Status Unknown'},
// ]

// public prconditions = [

  //{value: 'No', display:'No'},
  //{value: 'Yes', display:'Yes'},
  //{value: 'Unknown', display:'Unknown'},
  //{value: 'Pending', display: 'Pending'},


 //]