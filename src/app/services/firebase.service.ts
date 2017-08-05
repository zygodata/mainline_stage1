import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { Classify } from '../mainline/interface/classify';
import { Item } from  '../mainline/interface/item';
import { Platform } from '../mainline/interface/platform';
import { Vendor } from '../mainline/interface/vendor';
import { Company } from '../mainline/interface/company';
import { Product } from '../mainline/interface/product';
import { Features } from '../mainline/interface/features';



@Injectable()
export class FirebaseService {
  vendors: FirebaseListObservable<any[]>;
  classify: FirebaseListObservable<Classify[]>;
  items: FirebaseListObservable<Item[]>;
  platforms: FirebaseListObservable<Platform[]>;
 newCompany$: FirebaseListObservable<any[]>;
 vendor: FirebaseObjectObservable<any>;
 products: FirebaseListObservable<any[]>;
 product: FirebaseObjectObservable<any>;
 features: FirebaseListObservable<any[]>;



 newco: any;
 newpr: any;

// business: FirebaseListObservable<Business[]>;
  
  constructor( private _afdb: AngularFireDatabase) {

      }


getVendors() {
  this.vendors = this._afdb.list('/vendor') as
  FirebaseListObservable<Vendor[]>
  return this.vendors;
}


getProducts() {
  this.products = this._afdb.list('/product') as
  FirebaseListObservable<Product[]>
  return this.products;
}




getProduct() {
  this.product = this._afdb.object('/product') as
  FirebaseObjectObservable<Product>
  return this.product;


}


getClassify() {
  this.classify = this._afdb.list('/') as
  FirebaseListObservable<Classify[]>
  return this.classify;
}

getItems() {
  this.items = this._afdb.list('/items') as
  FirebaseListObservable<Item[]>
  return this.items;
}

getPlatforms() {
  this.platforms = this._afdb.list('/platforms') as
  FirebaseListObservable<Platform[]>
  return this.platforms;
}

getVendorDetails(id){
  this.vendor = this._afdb.object('/vendor/'+id) as
  FirebaseObjectObservable<Vendor>
  return this.vendor;
}



//This links the addVendor method in the Vendor Component to the Firebase Service and passes in the 
//(formRequest) property list in the onSubmit() method
addVendor(formRequest){
  this.vendors = this._afdb.list('/vendor') as 
  FirebaseListObservable<Vendor[]>
  return this.vendors.push(formRequest)
  .then(
    () => console.log('Push Worked'),
    console.error);
 
}

deleteProducts(id){
  return this.products.remove(id);
}


deleteItem(id){
  return this.vendors.remove(id);
}

updateVendor(id, editven) {
this.vendors = this._afdb.list('/vendor') 
return this.vendors.update(id, editven)

//updateVendor(id, newco) {
  //return this.vendors.update(id, newco)
}



  //This links the addPoduct method in the Product Component to the Firebase Service and passes in the 
//(newpr) property list in onSubmit() method
addProduct(formRequest){
  this.products = this._afdb.list('/product') as 
  FirebaseListObservable<Product[]>
  return this.products.push(formRequest)
  .then(
    () => console.log('Push Worked'),
    console.error);
 
}


getProductDetails(id){
  this.product = this._afdb.object('/product/'+id) as
  FirebaseObjectObservable<Product>
  return this.product;


}
addFeature(formSave){
  this.features = this._afdb.list('/product') as 
  FirebaseListObservable<Features[]>
  return this.features.push(formSave)
  .then(
    () => console.log('Push Worked'),
    console.error);

// Used (newprod) instead of (formRequest)

 
}

//Firebase JSON field interface

}