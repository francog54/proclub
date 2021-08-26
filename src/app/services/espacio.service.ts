import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Espacios } from '../models/espacios.model';

@Injectable({
  providedIn: 'root'
})
export class EspacioService {

  constructor(private http: HttpClient) {}

  getEspacios(): Observable<Espacios[]> {
    return this.http.get<Espacios[]>(`${environment.endpoint}/api/espacio`);
  }

  getEspacio(id): Observable<Espacios> {
    return this.http.get<Espacios>(`${environment.endpoint}/api/espacio/${id}`);
  }
}
