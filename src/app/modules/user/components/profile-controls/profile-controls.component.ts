import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { user } from "../../interfaces/user.interface";

@Component({
  selector: 'app-profile-controls',
  templateUrl: './profile-controls.component.html',
  styleUrls: ['./profile-controls.component.css']
})
export class ProfileControlsComponent implements OnInit {
  @Input() user;
  activeTab: Observable<string>;
  tabList = [
    {
      tab: 'selfies',
      text: 'NO. SELFIES',
      count: 'my_images'
    },
    {
      tab: 'glories',
      text: 'MY GLORIES',
      count: 'glories'
    },
    {
      tab: 'favourites',
      text: 'FAVOURITES',
      count: 'favourites'
    },
    {
      tab: 'followers',
      text: 'FOLLOWERS',
      count: 'followers'
    },
    {
      tab: 'followings',
      text: 'FOLLOWINGS',
      count: 'followings'
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activeTab = this.route.queryParams.pipe(map((params) => params.tab));
    this.route.queryParams.subscribe((params) => {
      const isValidTab = this.tabList.some((item) => item.tab === params.tab);
      if (!params.tab || !isValidTab) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { tab: 'selfies' }
        });
      }
    });
  }
}
