import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { AuthService } from './auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('herer babbay');
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer dd`
      }
    });
    return next.handle(request);
  }
}
