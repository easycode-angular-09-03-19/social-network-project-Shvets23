import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, Router } from "@angular/router";
import { GlobalAuthService } from "../services/global-auth.service";



@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements  CanActivate {
  constructor(
    private router: Router,
    private globalAuth: GlobalAuthService
    
  ) {}
  
  canActivate(route, state) {
    if (!this.globalAuth.isLogin){
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
