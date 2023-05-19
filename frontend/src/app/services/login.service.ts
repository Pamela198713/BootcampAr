import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Usuario`)
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Usuario/${id}`);
  }

  insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Usuario`, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/Usuario/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Usuario/${id}`);
  }

}
