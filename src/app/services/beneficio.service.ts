import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BeneficioService {
  constructor(private http: HttpClient) {}

  obtenerBeneficios(): Observable<any> {
    return this.http.get(`${environment.endpoint}/api/beneficios/`);
  }

  obtenerBeneficiosxId(id): Observable<any> {
    return this.http.get(`${environment.endpoint}/api/beneficios/${id}`);
  }
}
