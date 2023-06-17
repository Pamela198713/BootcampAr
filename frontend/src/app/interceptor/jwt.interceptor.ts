import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenServiceService } from '../services/token-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private url = "http://localhost:8000"

  constructor(private tokenService: TokenServiceService, private jwtHelperService: JwtHelperService) {}
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = this.tokenService.getToken();
    const isApiUrl = request.url.startsWith(this.url);
 
    if (token && isApiUrl) {
      if (this.jwtHelperService.isTokenExpired(token)) {
        location.reload();
      } else {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }

    return next.handle(request);
  }
}
