import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-no-registrado',
  templateUrl: './usuario-no-registrado.page.html',
  styleUrls: ['./usuario-no-registrado.page.scss'],
})
export class UsuarioNoRegistradoPage implements OnInit {
nombre: string = '';
  constructor(private _usuarioService: UsuarioService,
              private router: Router) { }

  ngOnInit() {
    this.nombre = this._usuarioService.nombreUsuario;
    console.log(this._usuarioService.nombreUsuario);
  }

  crearCuenta() {
    this.router.navigateByUrl('/login/ingresar-cuenta');
  }

}
