import { Router } from '@angular/router';
import { User } from './models/Models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthorizationService {
  constructor(private http: HttpClient, private router: Router) {}

  apiUrl = 'http://localhost:51071/api/account/';

  register(user: User) {
    const url = `${this.apiUrl}register`;
    return this.http.post<any>(url, user);
  }

  login(email: string, password: string, callback: (r: boolean) => any): void {
    const url = `${this.apiUrl}login`;
    const user = {
      email: email,
      password: password
    };
    this.http
      .post<any>(url, user)
      .subscribe(
        data => {
          // login successful if there's a jwt token in the response
          console.log(data.token);
          if (data) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(data.token));
            callback(true);
          }
        },
        // Errors will call this callback instead:
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(
              `Backend returned code ${err.status}, body was: ${err.message}`
            );
          }
          console.log('authenticationService: login = ', false);
          callback(false);
        }
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  Isloggedin() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
    }

  getToken() {
    return localStorage.getItem('currentUser');
  }
}
