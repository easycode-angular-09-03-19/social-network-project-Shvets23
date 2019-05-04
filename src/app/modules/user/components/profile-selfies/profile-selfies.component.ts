import { Component, OnInit, Input } from '@angular/core';
import { user } from '../../interfaces/user.interface';
import { ActivatedRoute } from "@angular/router";
import { UserService } from '../../../../services/user.service';
import { Images } from '../../interfaces/images.interface';
@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {
  images;
  id;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.userService.getImages(this.id).subscribe((images: Images) => {
      if(images) {
        this.images = images.images;
      }
    })
  }

}
