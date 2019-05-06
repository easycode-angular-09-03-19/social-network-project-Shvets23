import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})
export class UserControlComponent implements OnInit {
  modal = false;
  @Input() avatar;
  @Input() userId;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }
  onClick() {
    this.modal = !this.modal
  }
  logout(){
    localStorage.removeItem('sn_app_token');
    this.router.navigate(['/auth/login']);
  }
}
