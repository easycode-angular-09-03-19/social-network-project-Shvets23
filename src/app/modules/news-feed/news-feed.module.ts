import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPrewievComponent } from './components/news-prewiev/news-prewiev.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { NewsFeedRoutingModule } from './news-feed-routing.module';

@NgModule({
  declarations: [NewsPrewievComponent, NewsFeedComponent],
  imports: [
    CommonModule,
    NewsFeedRoutingModule
  ]
})
export class NewsFeedModule { }
