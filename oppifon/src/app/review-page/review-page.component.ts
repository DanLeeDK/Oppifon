import { AuthorizationService } from './../shared/authorization.service';
import { Component, OnInit } from '@angular/core';
import { User, Review } from '../shared/models/Models';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit {
  review: Review;
  public ratings = [1, 2, 3, 4, 5];
  public expert$: Observable<User>;
  constructor(private http: HttpService, private route: ActivatedRoute, private auth: AuthorizationService) {
    this.review = new Review();
  }

  ngOnInit() {
      this.getExpert();
    }

  public onSubmit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('Adding review');
      this.review.name = this.auth.currentUser().firstName; // + ' ' + this.user.lastName;
      this.http.addReview(id, this.review).subscribe();
    });
  }

  getExpert(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.expert$ = this.http.getExpert(id);
   });
  }

}

