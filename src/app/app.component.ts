import {Component, OnInit} from '@angular/core';
import { CurrentUserStoreService } from './services/current-user-store.service';
import { GlobalAuthService } from './services/global-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lesson7';
  constructor(
    private currentUser: CurrentUserStoreService,
    private globalAuth: GlobalAuthService
  ) {}
  ngOnInit(): void {
    if (this.globalAuth.token){
      this.currentUser.initCurrentUser();
    }
  }
  onClick() {

  }
}
