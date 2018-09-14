import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  public profiles = ['assets/img/Dan.jpg', 'assets/img/Henrik.jpg', 'assets/img/Rasmus.jpg'];

  constructor() { }
  ngOnInit() {
  }

}
