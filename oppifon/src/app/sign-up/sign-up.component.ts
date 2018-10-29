import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidation } from './validation';
import { User } from '../shared/models/Models';
import { AuthorizationService } from '../shared/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  whoAreYouSubmit = false;

  passwordPattern = '^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?!.*s).{6,12}$';
  mobileNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  interest: string;
  category: string;

  user: User;

  constructor(
    private router: Router,
    private authenticationService: AuthorizationService
  ) {
    this.user = new User();
    this.user.isExpert = false;
  }

  ngOnInit() {}


  public addInterest() {
    if (this.interest !== '') {
      if (this.user.interestTags === undefined) {
        this.user.interestTags = [];
      }
    this.user.interestTags.push(this.interest);
    }
  }

  public removeInterest(interestToRemove: string) {
    const interest = this.user.interestTags.find(x => x === interestToRemove);
    const index = this.user.interestTags.indexOf(interest);
    this.user.interestTags.splice(index, 1);
  }

  public addCategory() {
    if (this.category !== '') {
      this.user.expertTags.unshift(this.category);
    }
  }

  public removeCategory(categoryToRemove: string) {
    const category = this.user.expertTags.find(x => x === categoryToRemove);
    const index = this.user.expertTags.indexOf(category);
    this.user.expertTags.splice(index, 1);
  }

  public onSubmit() {
    this.whoAreYouSubmit = true;

    if (this.user.password === this.user.confirmPassword) {
      this.authenticationService.register(this.user).subscribe( data =>
        this.authenticationService.login(this.user.email, this.user.password, result => {
          if (result) {
            console.log('Logged in ' + result);
            this.router.navigate(['/home']);
          } else {
            console.log('not a valid user');
          }
        }));
    }

    console.log(this.user);
  }

}
