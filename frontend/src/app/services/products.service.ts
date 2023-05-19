import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Curso`)
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Curso/${id}`);
  }

  insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Curso`, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/Curso/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Curso/${id}`);
  }

}
