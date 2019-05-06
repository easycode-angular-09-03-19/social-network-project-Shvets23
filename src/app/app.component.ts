import {Component, OnInit} from '@angular/core';
import { CurrentUserStoreService } from './services/current-user-store.service';
import { GlobalAuthService } from './services/global-auth.service';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lesson7';
  loadingRouteConfig: boolean;
  constructor(
    private currentUser: CurrentUserStoreService,
    private globalAuth: GlobalAuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (this.globalAuth.token){
      this.currentUser.initCurrentUser();
    }
    this.router.events.subscribe((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      } else if(event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false;        
      }
    })
  }
  onClick() {

  }
}
