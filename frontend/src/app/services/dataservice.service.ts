import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(entity: string) {
    return this.http.get<any>(`${this.apiUrl}/${entity}`)
  }

  getById(entity: string, id: number) {
    return this.http.get<any>(`${this.apiUrl}/${entity}/${id}`);
  }




}
