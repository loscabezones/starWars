import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate( next:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.loginService.loginSuccessful){
      return true;
    }else{
      this.router.navigate(['/login']);
    };
  }
}
