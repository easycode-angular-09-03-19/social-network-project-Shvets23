import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { subscribeServerAnswer } from '../../../modules/user/interfaces/subscribe.interface';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit {
  @Input() user;
  status = 'User was added to the followings.';
  statusMap = {
    'User was deleted from the followings.': 'follow',
    'User was added to the followings.': 'following'
  }
  constructor(
    private userService: UserService
  ) { }
  follow(id){
    console.log(id);
    this.userService.startFollow(id).subscribe((res: subscribeServerAnswer)=>{
      this.status = res.message;
    }, (err) =>console.log(err))
  }
  ngOnInit() {
  }

}
