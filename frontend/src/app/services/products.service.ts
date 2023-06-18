import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 
import { Curso } from "../shared/interfaces/Curso";
import { Categoria } from '../shared/interfaces/Categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/product`)
  }

  getAllCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/curso`)
  }

  getById(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiUrl}/product/${id}`);
  }

  insert(data: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.apiUrl}/product`, data);
  }

  update(id: number, data: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/product/${id}`, data);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.apiUrl}/product/${id}`);
  }

  insertCategory(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/category`, data);
  }

  getAllCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}/category`);
  }

  deleteCateg(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.apiUrl}/category/${id}`);
  }

}
