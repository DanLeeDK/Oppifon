import {HttpService} from './../shared/http.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl, Form} from '@angular/forms';
import {PasswordValidation} from './validation';
import {User} from '../shared/models/Models';
import {AuthorizationService} from '../shared/authorization.service';
import {Router} from '@angular/router';

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

  catagories: string[];
  interestTags: string[];
  interestTag: string;
  expertTags: string[];
  expertTag: string;
  category: string;
  mainFields: string[];
  mainField: string;
  description: string;

  user: User;
  form;

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }


  constructor(
    private router: Router,
    private authenticationService: AuthorizationService,
    private http: HttpService,
    private fb: FormBuilder
  ) {
    this.user = new User();
    this.user.isExpert = false;
    this.createFormValidation(fb);
  }

  private createFormValidation(fb: FormBuilder) {
    this.form = fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        city: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        birthday: ['', Validators.required],
        gender: ['male', Validators.required],
        interest: ['', Validators.required],
        //category: [''],
        expert: [false, Validators.required],
      }, {
        validator: PasswordValidation.MatchPassword
      }
    );
  }

  ngOnInit() {
    this.http.getCategories().subscribe(data => {
      this.catagories = data;
    });
  }

  isFieldInvalid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  public addInterest() {
    if (this.form.controls.interest.value !== '') {
      if (this.interestTags === undefined) {
        this.interestTags = [];
      }
      this.interestTags.push(this.form.controls.interest.value);
    }
    this.form.controls.interest.value = '';
  }

  public removeInterest(interestToRemove: string) {
    const interest = this.user.interestTags.find(x => x === interestToRemove);
    const index = this.user.interestTags.indexOf(interest);
    this.user.interestTags.splice(index, 1);
  }

  public addExpertTag() {
    if (this.expertTag !== '') {
      if (this.expertTags === undefined) {
        this.expertTags = [];
      }
      this.expertTags.push(this.expertTag);
    }
    this.expertTag = '';
  }

  public removeExpertTag(tagToRemove: string) {
    const tag = this.expertTags.find(x => x === tagToRemove);
    const index = this.expertTags.indexOf(tag);
    this.expertTags.splice(index, 1);
  }

  public addMainField() {
    if (this.mainField !== '') {
      if (this.mainFields === undefined) {
        this.mainFields = [];
      }
      this.mainFields.push(this.mainField);
    }
    this.mainField = '';
  }

  public removeMainField(mainFieldToRemove: string) {
    const mainField = this.mainFields.find(x => x === mainFieldToRemove);
    const index = this.mainFields.indexOf(mainField);
    this.mainFields.splice(index, 1);
  }

  public onSubmit() {
    this.whoAreYouSubmit = true;

    this.authenticationService.register(this.user).subscribe(data =>
      this.authenticationService.login(this.user.email, this.user.password, result => {
        if (result) {
          console.log('Logged in ' + result);
          this.router.navigate(['/home']);
        } else {
          console.log('not a valid user');
        }
      }));


    console.log(this.user);
  }
}

