import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-profile',
  templateUrl: './expert-profile.component.html',
  styleUrls: ['./expert-profile.component.scss']
})
export class ExpertProfileComponent implements OnInit {
public reviews = ['Super professional help', 'Really helped me a lot', 'Best talk ever!'];
  constructor() { }

  ngOnInit() {
  }

}
