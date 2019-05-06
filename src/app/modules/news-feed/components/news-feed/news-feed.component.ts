import { Component, OnInit } from '@angular/core';
import { HeaderNavService } from '../../../../services/header-nav.service';
import { newsAnswer } from '../../interfaces/NewsAnswer';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  newsList;
  constructor(
    private navService: HeaderNavService
  ) { }

  ngOnInit() {
    this.navService.getNews().subscribe((res: newsAnswer)=>{
      this.newsList = res.news;
      console.log(this.newsList)
    })
  }

}
