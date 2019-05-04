import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service'
import { CurrentUserStoreService } from '../../../../services/current-user-store.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidden = true;
  userAvatar;
  userId;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private currentUser: CurrentUserStoreService
  ) { }

  ngOnInit() {
    this.currentUser.userWatcher.subscribe(({ avatar, _id }) => {
      if (_id) {
        this.userAvatar = avatar;
        this.userId = _id;
      }
    });
    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd)
    )
      .subscribe((event) => {
        this.activatedRoute.firstChild.data.subscribe((value) => {
          this.isHidden = !!value.withoutHeader;
        });
      });

    
  }
  logout(){
    localStorage.removeItem('sn_app_token');
    this.router.navigate(['/auth/login']);
  }
}
