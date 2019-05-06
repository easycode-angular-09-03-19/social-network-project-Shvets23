import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-prewiev',
  templateUrl: './news-prewiev.component.html',
  styleUrls: ['./news-prewiev.component.css']
})
export class NewsPrewievComponent implements OnInit {
  @Input() news;
  constructor() { }

  ngOnInit() {
  }

}
