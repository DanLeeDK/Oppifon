import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User, Review } from './models/Models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private router: Router) {}

  apiUrl = 'http://localhost:51071/api/';


  getExperts(): Observable<User[]> {
    const url = `${this.apiUrl}Expert`;
    return this.http.get<any>(url);
  }

  getExpert(id: string): Observable<User> {
    const url = `${this.apiUrl}Expert/${id}`;
    return this.http.get<any>(url);
  }

  getCategories(): Observable<string[]> {
    const url = `${this.apiUrl}Category`;
    return this.http.get<any>(url);
  }

  addReview(id: string, review: Review) {
    const url = `${this.apiUrl}expert/${id}/review`;
    return this.http.post(url, review);
  }

}
