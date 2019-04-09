import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GlobalAuthService } from "../../../../services/global-auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    private globalAuth: GlobalAuthService
  ) { }

  ngOnInit() {
    if (this.globalAuth.isLogin) {
      this.router.navigate(['/']);
    }
  }

}
