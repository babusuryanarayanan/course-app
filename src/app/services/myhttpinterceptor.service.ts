import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyhttpinterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request:HttpRequest<any>, next:HttpHandler) : Observable<HttpEvent<any>> {

    // console.log('processing request', request);
    return next.handle(request);
  }


}
