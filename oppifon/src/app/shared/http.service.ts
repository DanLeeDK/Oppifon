import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './models/Models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private router: Router) {}

  apiUrl = 'http://localhost:51071/api/';

  getUser() {
    const url = `${this.apiUrl}getUser`;
    return this.http.get<any>(url);
  }

  getExperts(): Observable<User[]> {
    const url = `${this.apiUrl}Expert`;
    return this.http.get<any>(url);
  }

  getCategories(): Observable<string[]> {
    const url = `${this.apiUrl}Category`;
    return this.http.get<any>(url);
  }

}
