import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rubro } from '../models/beneficio.model';

@Injectable({
  providedIn: 'root'
})
export class RubroService {

  constructor(private http: HttpClient) {}

  obtenerRubros(): Observable<Rubro[]> {
    return this.http.get<Rubro[]>(`${environment.endpoint}/api/rubro/`);
  }

  obtenerRubroPorID(id): Observable<Rubro> {
    return this.http.get<Rubro>(`${environment.endpoint}/api/rubro/${id}`);
  }
}
