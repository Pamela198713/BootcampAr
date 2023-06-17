import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  obtenerFactura(id: number) {
    return this.http.get(`${this.apiUrl}/facturas/${id}`);
  }

 
  crearFactura(factura: any) {
    return this.http.post(`${this.apiUrl}/facturas`, factura);
  }

 
  eliminarFactura(id: number) {
    return this.http.delete(`${this.apiUrl}/facturas/${id}`);
  }

  
  actualizarFactura(id: number, factura: any) {
    return this.http.put(`${this.apiUrl}/facturas/${id}`, factura);
  }
}
