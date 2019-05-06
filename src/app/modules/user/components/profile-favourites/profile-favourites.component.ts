import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from "@angular/router";
import { Images } from '../../interfaces/images.interface';


@Component({
  selector: 'app-profile-favourites',
  templateUrl: './profile-favourites.component.html',
  styleUrls: ['./profile-favourites.component.css']
})
export class ProfileFavouritesComponent implements OnInit {
  images;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.userService.getFavourites(id).subscribe((res: Images ) => {
      console.log(res)
      if(res) {
        this.images = res.images;
      }
    })
  }

}
