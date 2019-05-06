import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UserControlComponent } from './components/user-control/user-control.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NotificationsComponent,
    UserControlComponent,
    HeaderNavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
