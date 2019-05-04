import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { passwordEqual, passwordEqualForInput } from '@helpers/validators';
import { AuthService } from "../../services/auth.service";
import { LoginServerAnswer } from '../../interfaces/LoginServerAnswer';
import { Router } from "@angular/router";
import {ErrorStateMatcher} from '@angular/material';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (isSubmitted));
  }
}

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit  {
  signUpForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(
    private authService: AuthService,
    private router: Router,
    
  ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', [ Validators.required, passwordEqualForInput ]),
      email: new FormControl('', Validators.required),
      nickname: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      gender_orientation: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      date_of_birth_day: new FormControl('', Validators.required),
      date_of_birth_month: new FormControl('', Validators.required),
      date_of_birth_year: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.authService.signUp({ ...this.signUpForm.value }).subscribe((res: LoginServerAnswer) => {
      if (!res.error) {
        this.router.navigate(['/auth/login']);
      }
    });
    
  }
}
