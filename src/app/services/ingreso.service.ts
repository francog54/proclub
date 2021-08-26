import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingresos, PostIngreso } from '../models/ingresos.model';

@Injectable({
  providedIn: 'root',
})
export class IngresoService {
  public ingresoSeleccionado = null;

  constructor(private http: HttpClient) {}

  obtenerIngresos(): Observable<Ingresos[]> {
    return this.http.get<Ingresos[]>(`${environment.endpoint}/api/ingreso`);
  }

  obtenerIngresoXUsuario(idUser: any): Observable<Ingresos[]> {
    return this.http.get<Ingresos[]>(
      `${environment.endpoint}/api/ingreso/usuario/${idUser}`
    );
  }

  obtenerIngresoXUsuarioXReserva(
    idUser: any,
    reserva: any
  ): Observable<PostIngreso> {
    return this.http.post<PostIngreso>(
      `${environment.endpoint}/api/ingreso/usuario/${idUser}/${reserva}`, null
    );
  }

  obtenerIngresoByReserva(reserva: any): Observable<Ingresos[]> {
    return this.http.get<Ingresos[]>(
      `${environment.endpoint}/api/ingreso/reserva/${reserva}`
    );
  }
}
