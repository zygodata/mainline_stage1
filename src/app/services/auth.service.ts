import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from '../../environments/auth.config';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router} from '@angular/router';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});

  constructor(private _flashMessage: FlashMessagesService , private _router: Router) {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired('id_token');
  };

  public logout() {
    // Remove token from localStorage
   localStorage.removeItem('id_token');
      this._router.navigate(['/']);
   this._flashMessage.show("You are logged out",
   {cssClass: 'alert-success' , timeout: 3000});

  
  }
}