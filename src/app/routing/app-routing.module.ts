import { NgModule } from '@angular/core';
import { RouterModule, Routes, NavigationStart } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import { HomeComponent } from '../mainline/home/home.component';
import { AboutComponent} from '../mainline/about/about.component';
import { DashboardComponent} from '../mainline/dashboard/dashboard.component';
import { VendorComponent } from '../mainline/vendors/vendor/vendor.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthGuardService } from '../services/guard.service';
import { VendorDetailComponent } from '../mainline/vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from '../mainline/vendors/vendor-edit/vendor-edit.component';
import { VendorListComponent } from '../mainline/vendors/vendor-list/vendor-list.component';
import { ProductComponent } from '../mainline/products/product/product.component';
import { ProductDetailComponent } from '../mainline/products/product-detail/product-detail.component';
import { ProductEditComponent } from '../mainline/products/product-edit/product-edit.component';
import { ProductListComponent } from '../mainline/products/product-list/product-list.component';
import { ProductDashboardComponent } from '../mainline/products/product-dashboard/product-dashboard.component';
import { PersonaComponent } from '../mainline/personas/persona/persona.component';
import { PersonaAddComponent } from '../mainline/personas/persona-add/persona-add.component';
import { FeatureComponent } from '../mainline/features/feature/feature.component';
import { FeatureAddComponent } from '../mainline/features/feature-add/feature-add.component';





const routes: Routes = [
    {path: "", redirectTo:"home", pathMatch:"full"},
    {path: "", component: HomeComponent},
    {path: "navbar", component: NavbarComponent},
    {path: "home", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "vendor" , component: VendorComponent},
    {path: "vendor-detail/:id", component: VendorDetailComponent}, 
    {path: "vendor-edit/:id", component: VendorEditComponent},    
    {path: "vendor-list", component: VendorListComponent},
    {path: "product/:id", component: ProductComponent},
    {path: "product-detail/:id", component: ProductDetailComponent},
    {path: "product-edit/:id", component: ProductEditComponent},
    {path: "product-dashboard", component: ProductDashboardComponent},
    {path: "product-list", component: ProductListComponent},
    {path: "product-detail", component: ProductDetailComponent},
    {path: "persona" , component: PersonaComponent},
    {path: "persona-add" , component: PersonaAddComponent},
    {path: "feature" , component: FeatureComponent},
    {path: "feature-add" , component: FeatureAddComponent},

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
        ]
})

    export class AppRoutingModule{}
    export const routingComponents = [HomeComponent, DashboardComponent, NavbarComponent, AboutComponent, VendorComponent, VendorDetailComponent, VendorEditComponent,
    VendorListComponent, ProductComponent, ProductDashboardComponent, ProductDetailComponent, ProductListComponent, ProductEditComponent, PersonaComponent, PersonaAddComponent ]