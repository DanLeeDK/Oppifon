import { AuthorizationService } from './../shared/authorization.service';
import { Component, OnInit } from '@angular/core';
import { User, Review } from '../shared/models/Models';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit {
  review: Review;
  public ratings = [1, 2, 3, 4, 5];
  public expert$: Observable<User>;
  form;

  constructor(private http: HttpService, private route: ActivatedRoute, private auth: AuthorizationService, private fb: FormBuilder) {
    this.review = new Review();

    this.form = fb.group({
      title: ['', Validators.required],
      reviewText: ['', Validators.required],
      rating: ['', Validators.required],
      anonymity: [true, Validators.required]
    });
  }

  ngOnInit() {
      this.getExpert();
      this.review.anonymity = false;
    }

    onSubmit() {
      if (this.form.valid) {
        this.route.params.subscribe(params => {
          const id = params['id'];
          console.log('Adding review');
          this.review.name = this.auth.currentUser().firstName + ' ' + this.auth.currentUser().lastName;
          this.review.title = this.form.get('title').value;
          this.review.reviewText = this.form.get('reviewText').value;
          this.review.rating = this.form.get('rating').value;
          this.http.addReview(id, this.review).subscribe();
        });
      } else {
        // validate all form fields
      }
    }

    isFieldValid(field: string) {
      return !this.form.get(field).valid && this.form.get(field).touched;
    }

  getExpert(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.expert$ = this.http.getExpert(id);
   });
  }

}

