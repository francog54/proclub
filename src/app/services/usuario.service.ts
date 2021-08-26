import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  myAppUrl = environment.endpoint;

  // Almacenamos el nombre del usuario NO registrado
  nombreUsuario: string;
  nombre: string;
  apellido: string;
  documento: string;
  password: string;
  idClub: number;
  idDisciplina: number;

  constructor(private http: HttpClient) { }

  registrarFirebase(usuario: any): Observable<any> {
    return this.http.post(this.myAppUrl + '/api/registrar-firebase', usuario);
  }

  guardarToken(token: any): Observable<any> {
    return token;
   // return this.http.post(this.myAppUrl + '/api/registrar-firebase', token);
  }

  recuperarPassword(usuario: any): Observable<any>{
    return this.http.post(this.myAppUrl + '/api/reset-password', usuario)
  }

  signup(usuario: any): Observable<any> {
    return this.http.post(this.myAppUrl + '/api/signup', usuario);
  }

  obtenerUsuario(id): Observable<any> {
    return this.http.get(this.myAppUrl + '/api/usuario/' + id)
  }

  nuevaClave( camposClave ): Observable<any> {
    let header = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  
   
    return this.http.post(this.myAppUrl + '/api/nueva-clave', camposClave,  {headers:header});
  }

  modificarUsuario(idClub,idUsuario, data){
    let httpOptions = {
      headers: new HttpHeaders({  'Accept': 'application/json;'})
    };
    console.log(data)
    return this.http.put(this.myAppUrl + '/api/usuario/'+ idClub +'/' + idUsuario , {data:JSON.stringify(data)}, httpOptions);
  }

  agregarClub(idUsuario, idClub): Observable<any> {
    return this.http.post(this.myAppUrl + '/api/agregar-club/'+idUsuario+'/'+idClub, '');
  }




}
