import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from "./home-routing.module";
import {HomeService} from './services/home.service';
import { HomeInnerComponent } from './components/home-inner/home-inner.component';
import {ChallengeCardComponent} from '../../common/components/challenge-card/challenge-card.component';
import {ChallengesListComponent} from '../../common/components/challenges-list/challenges-list.component';
import {EmptyListComponent} from '../../common/components/empty-list/empty-list.component';
import { MessageService } from 'primeng/api';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeInnerComponent,
    ChallengeCardComponent,
    ChallengesListComponent,
    EmptyListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule
  ],
  providers: [HomeService, MessageService]
})
export class HomeModule { }
