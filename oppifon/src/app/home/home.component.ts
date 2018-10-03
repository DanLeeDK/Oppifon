import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public profiles = ['assets/img/Dan.jpg', 'assets/img/Henrik.jpg', 'assets/img/Rasmus.jpg'];
  public appointments = ['appointment 1', 'appointment 2', 'appointment 3'];

  constructor(private router: Router) { }
  ngOnInit() {
  }

  searchClick() {
    this.router.navigate(['/search']);
}

expertClick() {
  // TODO if user has expert page
  if (true) {
  this.router.navigate(['/expert']);
  // TODO if user dont have expert page
} else {
  // route to create expert page
}

}

  calendarClick() {
  this.router.navigate(['/calendar']);
}

}
