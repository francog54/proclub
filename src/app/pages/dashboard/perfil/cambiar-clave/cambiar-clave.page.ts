import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.page.html',
  styleUrls: ['./cambiar-clave.page.scss'],
})
export class CambiarClavePage implements OnInit {
  titulo = 'Cambiar Clave';
  activarClave: boolean = true;
  hide: boolean = true;
  hide1: boolean = true;
  hide2: boolean = true;

  /*camposClave: object = {
    nuevaClave: 'pasare1234',
    repetirClave: '111111',
    claveActual: '111111'
  };*/

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {


  }

  cambiarClave(camposClave) {

    //console.log(this.camposClave)
    this._usuarioService.nuevaClave(camposClave.subscribe(data => {
      console.log(data);
      //this.dismissLoading();

    }, error => {
      console.log(error);
      //this.dismissLoading();
      //this.mensaje('Opss.. ocurrio un error');
    })
    )

  }

  mostrarPassword() { }

}
