import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401) {
            // manejar errores 401 (no autorizado)
            // se puede redirigir al usuario a la página de inicio de sesión o mostrar un mensaje de error
          } else if (error.status === 403) {
            // manejar errores 403 (prohibido)
            // se puede redirigir al usuario a la página de inicio o mostrar un mensaje de error
          } else if (error.status === 404) {
            // manejar errores 404 (no encontrado)
            // se puede redirigir al usuario a una página personalizada de error 404 o mostrar un mensaje de error
          } else {
            // manejar otros errores
            // se puede mostrar un mensaje de error o registrar el error
          }

        return throwError(() => error);
      })
    );
  }
}