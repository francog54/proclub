import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  myAppUrl: string;

    // Almacenamos datos de la notificación
    idNotificacion : number;
    titulo: string;
    descripcion: string;
    destinatarios = [];

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
   }


  obtenerNotificaciones(): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/notificacion')
  }

  obtenerNotificacionesXClubxUsuario(idClub): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/notificacion-clubxusuario/'+ idClub)
  }

  crearNotificacion(notificacion): Observable<any> {
    return this.http.post(this.myAppUrl + '/api/notificacion', notificacion);
  }
 
}
