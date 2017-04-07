import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from 'angularfire2';
import { FirebaseConfig} from '../environments/firebase.config';
import { AuthGuardService} from './auth-guard.service';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    BrowserAnimationsModule,
    routes
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
