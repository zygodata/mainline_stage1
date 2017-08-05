import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { CanActivate} from '@angular/router';
import { AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) { 


  }

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    if(this._auth.authenticated()){
      console.log('AUTH GUARD PASSED');
      return true;
    } else  {
      console.log('BLOCKED BY AUTH GUARD');
      this._router.navigate(['/']);
      return false;

    }
    
}

}
