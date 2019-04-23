import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../../modules/auth/services/auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidden = true;
  tok;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
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
    console.log('worklof')
  }
}
