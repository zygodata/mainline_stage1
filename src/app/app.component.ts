import { Component } from '@angular/core';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from './services/auth.service';
//import { RouterModule} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private _auth:AuthService){
    
  }
  title = 'app works!';
}
