import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from '../../../../services/user.service';
import { followings } from '../../interfaces/followings.interface';
import { followUser } from '../../interfaces/follow.user.interface';


@Component({
  selector: 'app-profile-following',
  templateUrl: './profile-following.component.html',
  styleUrls: ['./profile-following.component.css']
})
export class ProfileFollowingComponent implements OnInit {
  users;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.userService.getFollowings(id).subscribe((res: followings) => {
      this.users = res.users;
      console.log(this.users)
    })
  }

}
