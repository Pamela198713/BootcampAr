import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth/auth-service.service'; 


@Injectable({
  providedIn: 'root'
})
export class NoAuthGuardGuard {

  constructor (private router:Router, private authService : AuthServiceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
      return false;
    } else {
      return true; 
    }
  }
  
}
