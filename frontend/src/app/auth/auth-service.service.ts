import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Usuario } from '../shared/interfaces/Usuario';
import { tap, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private url = "http://localhost:8000"
  private loggedIn = false;
  private token = "";
  private refreshToken = "";
  private jwtHelper: JwtHelperService;

  constructor(private http: HttpClient) {
   const storedToken = localStorage.getItem('token');
   this.jwtHelper = new JwtHelperService();
   const storedRefreshToken = localStorage.getItem('refreshToken');
      if (storedToken && storedRefreshToken) {
        this.token = storedToken;
        this.refreshToken = storedRefreshToken;
        this.loggedIn = true;
      }
  }


  login(credecials: any): Observable<any> {
    return this.http.post(`${this.url}/api/token`, credecials).pipe(
      tap((response: any) => {
        this.token = response.access;
        this.refreshToken = response.refresh;
        this.loggedIn = true;
        localStorage.setItem('token', this.token);
        localStorage.setItem('refreshToken', this.refreshToken);
      })
    );
  }

  register(user: any) : Observable<any>{
    return this.http.post(`${this.url}/auth/register`,user)
  }

  getRol(id: any): Observable<string> {
    return this.http.get<Usuario>(`${this.url}/api/usuario/${id}`).pipe(
        map(user => user.rol)
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getToken() {
    return this.token;
  }

  public getUserLoggedId(): string {
    const token = localStorage.getItem('token');
    const decodedToken = this.jwtHelper.decodeToken(token ?? '');
    return decodedToken.user_id;
  }

  
}
