import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('interceptor', request);
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        token: '1234567899876',
      },
    });
    // if (request.method === 'Post') {
    //   request = request.clone({
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
    //       token: 'qwertyuiopoiuyt',
    //     }),
    //   });
    //   return next.handle(request);
    // }
    console.log('interceptor', request);

    return next.handle(request);
  }
}
