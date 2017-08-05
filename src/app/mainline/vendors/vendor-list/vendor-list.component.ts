import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FirebaseService } from '../../../services/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

vendors: any;
  constructor(private _auth:AuthService, private _firebaseService:FirebaseService) { }

  ngOnInit() {
  
  this._firebaseService.getVendors().subscribe(vendors => {
     console.log(vendors);
   this.vendors = vendors;
  });
  
  }
}