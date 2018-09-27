import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public mainOptions = ['Technologi', 'Health', 'Education', 'Sport', 'Psychology'];
  public mainCatagory = '';
  public subOptions = [];
  public subCatagory = '';

  constructor() { }

  ngOnInit() {

  }

  public getSubCatagories(mainCatagory: string) {
    // TODO service call
    this.subOptions = ['Love', 'Bullying', 'Stress', 'Anxiety', 'Food'];
    console.log('Hello');
  }

}
