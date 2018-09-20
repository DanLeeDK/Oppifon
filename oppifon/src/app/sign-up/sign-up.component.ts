import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserSignUp } from './user-sign-up';
import { PasswordValidation } from './validation';
import { $ } from 'protractor';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  whoAreYouSubmit: boolean = false;
  
  @ViewChild('carouselVar') carousel: ElementRef

  passwordPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mobileNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  user: UserSignUp;


  expert = false;

  public whoAreYouForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.user = new UserSignUp();
    this.createWhoAreYouForm(fb);
  }

  ngOnInit() {
    
  }

  get f() { return this.whoAreYouForm.controls; }

  public onSubmit(){
    this.whoAreYouSubmit = true;
    if(this.whoAreYouForm.valid){
      this.user.firstName = this.whoAreYouForm.controls['firstName'].value;
      this.user.lastName = this.whoAreYouForm.controls['lastName'].value;
      this.user.email = this.whoAreYouForm.controls['email'].value;
      this.user.password = this.whoAreYouForm.controls['password'].value;  
      
    }
    
    console.log(this.user)
  }

  private createWhoAreYouForm(fb: FormBuilder) {
    this.whoAreYouForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, {
        validator: PasswordValidation.MatchPassword
      });
  }
}
