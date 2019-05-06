import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from '../../../../services/user.service';
import { followings } from '../../interfaces/followings.interface';
import { followUser } from '../../interfaces/follow.user.interface';
@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {
  users;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.userService.getFollowers(id).subscribe((res: followings) => {
      this.users = res.users;
      console.log(this.users, 'Followers')
    })
  }

}
