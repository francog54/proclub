import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myAppUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
  }


  validate(correo: any): Observable<any> {
    return this.http.post(this.myAppUrl + '/api/validate', correo);
  }

  login(usuario: any): Observable<any> {
    return this.http.post(this.myAppUrl + '/api/signin', usuario);
  }
}
