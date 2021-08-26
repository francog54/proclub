import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClubInfo } from '../models/club.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
  }


  obtenerClubes(): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/lista-clubs/activos');
  }

  obtenerDisciplinasByIdClub(idClub: number): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/disciplina-club/' + idClub);
  }

  obtenerClubesxId(idClub: number): Observable<ClubInfo> {
    return this.http.get<ClubInfo>(this.myAppUrl + '/api/clubs/' + idClub);
  }

  obtenerClubesxUsuario(idUsuario: number): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/usuario/clubs/' + idUsuario);
  }
  //Posiciones de una disciplina
  obtenerPosicionesxDisciplina(idDisciplina: number): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/posiciones/' + idDisciplina);
  }
 //Divisiones de una disciplina
  obtenerDivisionesxDisciplina(idClub:number, idDisciplina:number): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/division/'+ idClub + '/' + idDisciplina);
  }

}
