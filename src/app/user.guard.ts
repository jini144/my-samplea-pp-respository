import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUserService } from './login-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {


  constructor (private loginUserService: LoginUserService, private router: Router) {}
  canActivate(): boolean {  
  debugger
    if (this.loginUserService.getLoginUser()) {  
        return true;

    }else{
      this.router.navigate(['login'])
      return false;
    }  

}  
     

  
}
