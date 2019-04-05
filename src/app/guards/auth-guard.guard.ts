import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CanActivate, Router} from "@angular/router";
import { GlobalAuthService } from "../services/global-auth.service";



@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements  CanActivate {
  constructor(
    private router: Router,
    private globalAuth: GlobalAuthService
    
  ) {}
  // canActivate(route, state) {
  //   const userState = true;
  //   if (!userState) {
  //     this.router.navigate(['/about']);
  //     return false;
  //   }
  //   return true;
  // }
  canActivate(route, state) {
    if (!this.globalAuth.isLogin){
      this.router.navigate(['/auth/login']);
      return false;
    } else {
      return true;
    }

  }
}
