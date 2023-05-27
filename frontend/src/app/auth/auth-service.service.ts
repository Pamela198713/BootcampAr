import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Usuario } from '../shared/interfaces/Usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private url = "http://127.0.0.1:8000"

  constructor(private http: HttpClient) { }


  login(credecials: any) : Observable<any>{
    return this.http.post(`${this.url}/api/token`,credecials)
  }
  register(user: Usuario) : Observable<any>{
    return this.http.post(`${this.url}auth/register`,user)
  }

  getRol(id: any) : Observable<any>{
    return this.http.get(`${this.url}api/usuario/`,id)
  }



  
}
