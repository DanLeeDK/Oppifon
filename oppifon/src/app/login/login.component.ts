import { HttpService } from './../shared/http.service';
import { Router } from '@angular/router';
import { AuthorizationService } from './../shared/authorization.service';
import { Component, OnInit } from '@angular/core';
import { UserCredentials, User } from '../shared/models/Models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public title = 'Welcome to Oppifon';
  public experts: User[];
  public profiles = ['assets/img/Dan.jpg', 'assets/img/Henrik.jpg', 'assets/img/Rasmus.jpg'];
  constructor(private service: AuthorizationService, private router: Router, private http: HttpService) { }

  ngOnInit() {
    this.http.getExperts().subscribe( data => {
      const randomInt = this.randomNumber(data.length - 2);
      this.experts = this.shortenDescription(data.slice(randomInt, randomInt + 3));
    });
  }

  shortenDescription(experts: User[]) {
    experts.forEach(element => {
      if (element.description.length > 50) {
        element.description = element.description.slice(0, 100) + '...';
      }
    });
    return experts;
  }

  randomNumber(max) {
    return Math.floor(Math.random() * (max));
}

  signupClick() {
    this.router.navigate(['/signup']);
  }
}
