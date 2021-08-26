import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
   }


  obtenerDisciplinasXClub(idClub): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/disciplina-club/'+ idClub)
  }


 
}
