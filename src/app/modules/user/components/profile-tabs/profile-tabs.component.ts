import { Component, OnInit, Input } from '@angular/core';
import { user } from '../../interfaces/user.interface';

@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.css']
})
export class ProfileTabsComponent implements OnInit {
  @Input() user: user;
  @Input() activeTab;
  constructor() { }

  ngOnInit() { }
}
