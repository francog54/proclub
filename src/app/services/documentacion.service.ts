import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentacionService {
  myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
   }


  obtenerDocumentosxClub(idClub:number): Observable<any> {
    //:club
    return this.http.get(this.myAppUrl + '/api/documento/club/' + idClub)
  }

  obtenerDocumentosxUsuarioClub(idClub:number, idUsuario:number): Observable<any> {
    //:club/:usuario
    return this.http.get(this.myAppUrl + '/api/documento/club/usuario/' + idClub +'/' + idUsuario)
  }


 
}
