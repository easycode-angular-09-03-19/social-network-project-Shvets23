import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './common/components/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MatGridListModule } from '@angular/material/grid-list';
import { NotificationsComponent } from './common/components/notifications/notifications.component';
import { AuthService } from './modules/auth/services/auth.service'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotificationsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ToastModule,
    MatGridListModule

  ],
  providers: [MessageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
