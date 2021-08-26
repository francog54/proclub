import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  myAppUrl: string;

    // Almacenamos datos de la encuesta
    idEncuesta : number;
    titulo: string;
    descripcion: string;
    pregunta: string;
    opcion: string;
    destinatarios = [];

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
    console.log(this.titulo)
    console.log(this.descripcion)
   }


  obtenerEncuestas(): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/encuesta')
  }

  crearEncuesta(encuesta): Observable<any> {
    return this.http.post(this.myAppUrl + '/api/encuesta', encuesta);
  }

  crearPregunta(idEncuesta,pregunta): Observable<any> {
    return this.http.post(this.myAppUrl + '/api/pregunta/'+idEncuesta, pregunta);
  }

 //crear respuesta de id de una pregunta
  crearRespuesta(idPregunta,respuesta): Observable<any> {
    return this.http.post(this.myAppUrl + '/api/respuesta/pregunta/'+idPregunta, respuesta);
  }

  //traer a todas la preguntas de una encuesta": "GET /pregunta/:encuesta"
  obtenerPreguntas(idEncuesta): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/preguntas')
  }

  //trae toda las respuesta de una pregunta": "GET /respuesta/pregunta/:pregunta",
  obtenerRespuestas(idPregunta): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/respuesta/pregunta/'+idPregunta)
  }
  

  /*
"traer encuesta": "GET /encuesta",
"traer encuesta por id": "GET /encuesta/:id",
"modificar encuestar por id ": "PUT /encuesta/:id",
"eliminar encuestar por id ": "DELETE /encuesta/:id",
"enviar encuesta": "POST /encuesta-post",
"traer  pregunta por id": "GET /pregunta/id/:id",
"modificar pregunta por id": "PUT /pregunta/:id",
"eliminar pregunta por id": "DELETE /pregunta/:id",
"trae una respuesta por su id": "GET /respuesta/:id",
"modifica respuesta por su id": "PUT /respuesta/:id",
"elimina una respuesta por su id": "DELETE /respuesta/:id",*/


 
}
