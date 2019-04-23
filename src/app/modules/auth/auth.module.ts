import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalAuthService } from "../../services/global-auth.service";
import { Router } from "@angular/router";

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthService } from "./services/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ResetPasswordModalComponent } from './components/reset-password-modal/reset-password-modal.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { MatRadioModule } from '@angular/material/radio';
import {ErrorStateMatcher, MatButtonModule, MatCheckboxModule, ShowOnDirtyErrorStateMatcher} from '@angular/material';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LoginFormComponent,
    ResetPasswordModalComponent,
    SignupFormComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [AuthService, {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}]
})
export class AuthModule {
  constructor(
    private globalAuth: GlobalAuthService,
    private router: Router,


  ) {}
  ngOnInit() {
    if (this.globalAuth.isLogin) {
      this.router.navigate(['/']);
    }
  }
 }
