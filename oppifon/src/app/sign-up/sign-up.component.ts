import { HttpService } from './../shared/http.service';
import { Component, OnInit } from '@angular/core';
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
  catagories: string[];
  interestTag: string;
  subCatagory: string;
  mainField: string;
  category: string;

  user: User;

  constructor(
    private router: Router,
    private authenticationService: AuthorizationService, private http: HttpService
  ) {
    this.user = new User();
    this.user.isExpert = false;
  }

  ngOnInit() {
    this.http.getCategories().subscribe( data => {
      this.catagories = data; });
  }


  public addInterest() {
    if (this.interestTag !== '') {
      if (this.user.interestTags === undefined) {
        this.user.interestTags = [];
      }
      this.user.interestTags.push(this.interestTag);
    }
    this.interestTag = '';
  }

  public removeInterest(interestToRemove: string) {
    const interest = this.user.interestTags.find(x => x === interestToRemove);
    const index = this.user.interestTags.indexOf(interest);
    this.user.interestTags.splice(index, 1);
  }

  public addCategory() {
    if (this.category !== '') {
      if (this.user.expertTags === undefined) {
        this.user.expertTags = [];
      }
      this.user.expertTags.push(this.subCatagory);
    }
    this.subCatagory = '';
  }

  public removeCategory(categoryToRemove: string) {
    const category = this.user.expertTags.find(x => x === categoryToRemove);
    const index = this.user.expertTags.indexOf(category);
    this.user.expertTags.splice(index, 1);
  }

  public addMainField() {
    if (this.mainField !== '') {
      if (this.user.mainFields === undefined) {
        this.user.mainFields = [];
      }
      this.user.mainFields.push(this.mainField);
    }
    this.mainField = '';
  }

  public removeMainField(mainFieldToRemove: string) {
    const mainField = this.user.mainFields.find(x => x === mainFieldToRemove);
    const index = this.user.mainFields.indexOf(mainField);
    this.user.mainFields.splice(index, 1);
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
