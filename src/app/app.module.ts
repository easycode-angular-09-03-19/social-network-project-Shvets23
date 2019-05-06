import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthService } from './modules/auth/services/auth.service'
import { NavbarModule } from './modules/navbar/navbar.module';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    MatGridListModule,
    NavbarModule,
    MatProgressBarModule
  ],
  providers: [
    MessageService, 
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
