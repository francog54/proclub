import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
   }


  obtenerTurnos(): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/turno')
  }

  obtenerTurno(id): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/turno/'+id)
  }
 
  obtenerTurnosInactivos(): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/turno-inactivo')
  }
  
  //"trae todas las reserva de un usuario": "GET  /reserva/usuario/:usuario",
  obtenerResverasXUsuario(idUsuario): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/reserva/usuario/'+idUsuario)
  }

 //"Creo una reserva pasando el id del usuario y el id del turno elegido": "POST  /reserva/:usuario/:turno",
  crearReserva(idUsuario, idTurno): Observable<any> {
    return this.http.post(this.myAppUrl + '/api/reserva/'+idUsuario+'/'+idTurno, {});
  }
 

 
}

/*
"get traer todos los estado de turno": "GET /estado-turno",
"traer un estado de turno por id": "GET /estado-turno/:id",
"traer todos los turnos ": "GET /turno",
"traer turno por id": "GET /turno/:id",
"crear turno con su estado de turno": "POST /turno/:estado",
"eliminar turno ": "DELETE /turno/:id",

"trae el estado de reserva": "GET /estado-reserva",
"trae el estado de reserva por id": "GET /estado-reserva/:id",
"trae todas las reserva": "GET /reserva",
"trae todas las reserva por id": "GET /reserva/:id",
"trae todas las reserva de un usuario": "GET  /reserva/usuario/:usuario",
"modifica el estado de la reserva por el id de la reserva": "PUT /reserva/:id/:estado",
"Creo una reserva pasando el id del usuario y el id del turno elegido": "POST  /reserva/:usuario/:turno",
"Elimino una reserva": "DELETE /reserva/:id",

*/

