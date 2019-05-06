import { Component, OnInit } from '@angular/core';
import { GlobalAuthService } from '../../../../services/global-auth.service';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;
  authUserId;
  id;
  activeTab = 'selfies';
  constructor(
    private globalAuth: GlobalAuthService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.authUserId = this.globalAuth.userId;
    this.getUser();
  }
  getUser() {
    this.userService.getUserById(this.id).subscribe((user) => {
      if (user._id) {
        this.user = user;
      }
    });
  }
  uploadCover(cover) {
    this.userService.uploadCover(cover).subscribe((res) => {
      if (!res.error) {
        this.getUser();
      }
    });
  }
}
