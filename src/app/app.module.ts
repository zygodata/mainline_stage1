import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseConfig} from '../environments/firebase.config';
import { RouterModule} from '@angular/router';
import { AppRoutingModule} from './routing/app-routing.module';
import { routingComponents} from './routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardService } from './services/guard.service';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { FirebaseService} from './services/firebase.service';
import { PersonaService} from './services/persona.service';
import { DataTableModule, SharedModule, SelectItem, DropdownModule, ButtonModule, InputTextModule, ToolbarModule, RadioButtonModule, 
  Message, GrowlModule, CheckboxModule, MultiSelectModule, ChartModule, InputTextareaModule, TabViewModule } from 'primeng/primeng';


import { AppComponent } from './app.component';
import { AuthService} from './services/auth.service';
import { HttpService } from './services/http.service';
import { HomeComponent } from './mainline/home/home.component';
import { DashboardComponent } from './mainline/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './mainline/about/about.component';
import { VendorComponent } from './mainline/vendors/vendor/vendor.component';
import { VendorEditComponent } from './mainline/vendors/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './mainline/vendors/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './mainline/vendors/vendor-detail/vendor-detail.component';
import { ProductComponent } from './mainline/products/product/product.component';
import { ProductDetailComponent } from './mainline/products/product-detail/product-detail.component';
import { ProductEditComponent } from './mainline/products/product-edit/product-edit.component';
import { ProductListComponent } from './mainline/products/product-list/product-list.component';
import { ProductDashboardComponent } from './mainline/products/product-dashboard/product-dashboard.component';
import { PersonaComponent } from './mainline/personas/persona/persona.component';
import { PersonaAddComponent } from './mainline/personas/persona-add/persona-add.component';
import { FeatureComponent } from './mainline/features/feature/feature.component';
import { FeatureAddComponent } from './mainline/features/feature-add/feature-add.component';
import { RedditService } from './services/reddit.service';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashboardComponent,
    NavbarComponent,
    AboutComponent,
    VendorComponent,
    VendorEditComponent,
    VendorListComponent,
    VendorDetailComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductDashboardComponent,
    PersonaComponent,
    PersonaAddComponent,
    FeatureComponent,
    FeatureAddComponent,

    

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFireDatabaseModule,
    FlashMessagesModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    RadioButtonModule,
    GrowlModule,
    CheckboxModule,
    MultiSelectModule,
    ChartModule,
    InputTextareaModule,
    TabViewModule,
    
    
    
  ],
  providers: [AuthService, HttpService, AuthGuardService, FirebaseService, PersonaService, RedditService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
