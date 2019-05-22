import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from '../../core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class ILoginContext {
  username: string;
  password: string;
  token: string;
}

const defaultUser = {
  username: 'hemant',
  password: '12345',
  token: '12345'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private http: HttpClient) {}

  login(credentials) {
    return this.http
      .post('https://hkauthapi.herokuapp.com/users/signin', credentials)
      .pipe(
        map((res: any) => {
          if (res && res.token) {
            localStorage.setItem('token', res.token);
            return true;
          }
          return false;
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) { return null; }

    const helper = new JwtHelperService();
    return helper.decodeToken(token);
  }
}
