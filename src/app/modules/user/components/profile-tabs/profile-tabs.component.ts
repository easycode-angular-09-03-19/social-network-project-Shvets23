import { Component, OnInit, Input } from '@angular/core';
import { user } from '../../interfaces/user.interface';
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.css']
})
export class ProfileTabsComponent implements OnInit {
  @Input() user: user;
  
  activeTab: Observable<string>;

  constructor(
    private route: ActivatedRoute

  ) { }

  ngOnInit() { 
    this.activeTab = this.route.queryParams.pipe(map((params) => params.tab));
  }
}
