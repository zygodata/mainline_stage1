import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FirebaseService } from '../../../services/firebase.service';
import { AuthService } from '../../../services/auth.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Vendor } from '../../interface/vendor';
import { RedditService } from '../../../services/reddit.service';


@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  id: any;
  vendor: any;
  news: any;
  title: any;

  sfdclink = 'https://na20.salesforce.com/00Oa0000007bhRo';
  url = 'http://www.ibm.com';

 
  constructor(private _auth:AuthService, private _firebaseService: FirebaseService, private _route: ActivatedRoute,
  private _router: Router, private _redditService: RedditService) { }

  ngOnInit() {

     

    //get id for vendor
    this.id = this._route.snapshot.params['id'];

  
  
this.getNews('ibm', 5)

    this._firebaseService.getVendorDetails(this.id).subscribe(vendor => {
      this.vendor = vendor;
      console.log(vendor);
    });
  }

   





onDeleteClick() {
this._firebaseService.deleteItem(this.id);
this._router.navigate(['dashboard']);

}

getNews(company,limit){
  this._redditService.getNews(company, limit).subscribe(response => {
    this.news = response.data.children;
    console.log(response);
  });


}


}
