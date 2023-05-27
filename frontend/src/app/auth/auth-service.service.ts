import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { tap } from 'rxjs/operators'; 
import { Login } from '../shared/interfaces/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private url = "http://127.0.0.1:8000"

  loginl?: Login;

  constructor(private http: HttpClient) { }


  login(credecials: any) : Observable<any>{
    return this.http.post(`${this.url}/api/token`,credecials).pipe(
      tap(this.loginl => {
        // localStorage.setItem('token',resp?.access );
        console.log(resp)
      })
    );
  }

  
}
