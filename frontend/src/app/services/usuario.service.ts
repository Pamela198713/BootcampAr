import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 
import { Usuario } from "../shared/interfaces/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/Usuario`)
  }

  getById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/Usuario/${id}`);
  }

  insert(data: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/Usuario`, data);
  }

  update(id: number, data: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/Usuario/${id}`, data);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.apiUrl}/Usuario/${id}`);
  }

}
