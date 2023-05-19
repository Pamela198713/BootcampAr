import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 
import { Curso } from "../shared/interfaces/Curso";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/Curso`)
  }

  getById(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiUrl}/Curso/${id}`);
  }

  insert(data: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.apiUrl}/Curso`, data);
  }

  update(id: number, data: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/Curso/${id}`, data);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.apiUrl}/Curso/${id}`);
  }

}
