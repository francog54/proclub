import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  constructor(private http: HttpClient) {}

  getReservaByUsuario(idUsuario): Observable<any> {
    return this.http.get(
      `${environment.endpoint}/api/reserva/usuario/${idUsuario}`
    );
  }

  getReservaByUsuarioXClub(idUsuario, idClub): Observable<any> {
    return this.http.get(
      `${environment.endpoint}/api/reserva/usuario/${idUsuario}/${idClub}`
    );
  }
}
