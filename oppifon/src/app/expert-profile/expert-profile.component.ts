import { HttpService } from './../shared/http.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expert-profile',
  templateUrl: './expert-profile.component.html',
  styleUrls: ['./expert-profile.component.scss']
})
export class ExpertProfileComponent implements OnInit {
  public id: string;
  public reviews = ['Super professional help', 'Really helped me a lot', 'Best talk ever!'];
  constructor(private router: Router, private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params.toString();
      console.log(this.id);
    });
  }

  calendarClick() {
    this.router.navigate(['/calendar']);
  }

}
