import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';
import { Vendor } from '../interface/vendor';
import { DataTableModule, SharedModule, SelectItem, DropdownModule, ToolbarModule, ButtonModule, InputTextModule,
 Message, GrowlModule, ChartModule } from 'primeng/primeng';
import { VendorDetailComponent } from '../vendors/vendor-detail/vendor-detail.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  vendors: Vendor[];
  //vendors: any;
  cols: any;
  vendor: any;

  
msgs: Message[] = [];
data: any;

@Input() callBack: Function;

  constructor(private _auth:AuthService, private _firebaseService:FirebaseService, private _router:Router) {
      
 this.data = {
            labels: ['Vendors','Data Management','Security'],
            datasets: [
                {
                    data: [300, 100, 50],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
    }




   

  ngOnInit() {
   
   //this.loading = true;

 this._firebaseService.getVendors().subscribe(vendors => {
     console.log(vendors);
   this.vendors = vendors;
    });



   //this._firebaseService.getVendors().subscribe(vendors => {
     //console.log(vendors);
   //this.vendors = vendors;
   //});


  
  
this.cols = [
            {field: 'companyname', header: 'Company Name'},
            {field: 'companytype', header: 'Company Type'},
            {field: 'mlstatus', header: 'Mainline Status'},
            {field: 'source', header: 'Purchasing Source'},
            {field: 'mlcontact', header: 'Mainline Owner'},
          
        ];
}

selectVendor(ven: Vendor) {
   this.msgs = [];
   this.msgs.push({severity:'info', summary: 'Vendor Details', detail:'Company Name:' + ven.url});



}


 onAlert(){
  alert("Hello World")}

  //   this._firebaseService.getClassify().subscribe(classify => {
   //   console.log(classify);
  //  });
  


//onAlert(){  this._router.navigate(['dashboard']);
  //alert("Hello World")

//}
  
update(dt) {
  dt.reset();
}


}

//onDivert() {

  //this._router.navigate(['dashboard']);
//}



