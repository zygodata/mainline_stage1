import { Component } from '@angular/core';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { routes} from './app.routes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
