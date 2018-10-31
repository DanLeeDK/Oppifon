import { User } from './../shared/models/Models';
import { HttpService } from './../shared/http.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expert-profile',
  templateUrl: './expert-profile.component.html',
  styleUrls: ['./expert-profile.component.scss']
})
export class ExpertProfileComponent implements OnInit {
  public expert: User;
  public reviews = ['Super professional help', 'Really helped me a lot', 'Best talk ever!'];
  constructor(private router: Router, private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getExpert();
}

getExpert(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.http.getExpert(id.toString())
    .subscribe(expert => this.expert = expert);
}
  calendarClick() {
    this.router.navigate(['/calendar']);
  }

}
