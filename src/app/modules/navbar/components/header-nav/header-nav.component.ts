import { Component, OnInit } from '@angular/core';
import { HeaderNavService } from '../../../../services/header-nav.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor(
    private navService: HeaderNavService
  ) { }

  ngOnInit() {
    this.navService.getNews().subscribe((res)=>{
      console.log(res, 'navHeader')
    })
  }

}
