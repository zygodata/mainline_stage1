import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit
 {
   branding = 'Mainline';


  constructor(public _auth:AuthService) { 
    
  }

  ngOnInit() {
  }



}