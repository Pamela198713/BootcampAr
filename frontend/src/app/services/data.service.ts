import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(entity: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${entity}`)
  }

  getById(entity: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${entity}/${id}`);
  }

  insert(entity: string, data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${entity}`, data);
  }

  update(entity: string, id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${entity}/${id}`, data);
  }

  delete(entity: string, id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${entity}/${id}`);
  }

}
