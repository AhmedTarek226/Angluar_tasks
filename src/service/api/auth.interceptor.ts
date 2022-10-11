import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../account.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private account:AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const res = request.clone({
      headers:request.headers.set('isAdmin',this.account.getAdminFromStorage()??"")
    })
    return next.handle(request);
  }
}
