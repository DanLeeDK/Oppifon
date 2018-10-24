import { AuthorizationService } from './../shared/authorization.service';
import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../shared/models/Models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title = 'Welcome to Oppifon';
  public profiles = ['assets/img/Dan.jpg', 'assets/img/Henrik.jpg', 'assets/img/Rasmus.jpg'];
  constructor(private service: AuthorizationService) { }

  ngOnInit() {
  }
}
