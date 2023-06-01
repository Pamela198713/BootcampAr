import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 
import { Usuario } from "../shared/interfaces/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuario`)
  }

  getById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/usuario/${id}`);
  }

  insert(data: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/usuario`, data);
  }

  update(id: number, data: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/usuario/${id}`, data);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.apiUrl}/usuario/${id}`);
  }

}
