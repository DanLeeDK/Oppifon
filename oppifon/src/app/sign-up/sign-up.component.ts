import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  private _firstName;
  private _lastName;
  private _email;
  private _password;
  constructor() { }

  ngOnInit() {
   
  }
  public whoAreYouClick(firstName, lastName, email, password){
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._password = password;
    console.log(`${firstName}`);
  }
}
