import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  public showWhoAreYou;
  public showWhatAreYou;
  public showAreYouAnExpert;
  public showExpertCategories;
  public test;

  constructor() { }

  ngOnInit() {
    this.showWhoAreYou = true;
    this.showWhatAreYou = false;
    this.showAreYouAnExpert = false;
    this.showExpertCategories = false;
    this.test = "sdfasdf"
  }

  public showWhoAreYouClick(){
    this.showWhoAreYou = true;
    this.showWhatAreYou = false;
    this.showAreYouAnExpert = false;
    this.showExpertCategories = false;
  }

  public showWhatAreYouClick(){
    this.showWhoAreYou = false;
    this.showWhatAreYou = true;
    this.showAreYouAnExpert = false;
    this.showExpertCategories = false;
    this.test = "CLICK";
    console.log("click");
  }

  public showAreYouAnExpertClick(){
    this.showWhoAreYou = false;
    this.showWhatAreYou = false;
    this.showAreYouAnExpert = true;
    this.showExpertCategories = false;
  }

  public showExpertCategorysClick(){
    this.showWhoAreYou = false;
    this.showWhatAreYou = false;
    this.showAreYouAnExpert = false;
    this.showExpertCategories = true;
  }
}
