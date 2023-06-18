import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
 
  private apiUrl = 'http://localhost:8000/api';
  

  constructor(private http: HttpClient) { }
  
  obtenerCarrito(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  agregarAlCarrito(productId: number): Observable<any> {
    return this.http.post(this.apiUrl, { productId });
  }

  eliminarDelCarrito(productId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${productId}`);
  }
  }
