import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Usuario } from '../shared/interfaces/Usuario';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private url = "http://127.0.0.1:8000"
  private loggedIn = false;
  private token = "";
  private refreshToken = "";

  constructor(private http: HttpClient) {
   const storedToken = localStorage.getItem('token');
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

  register(user: Usuario) : Observable<any>{
    return this.http.post(`${this.url}auth/register`,user)
  }

  getRol(id: any) : Observable<any>{
    return this.http.get(`${this.url}api/usuario/`,id)
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  
}
