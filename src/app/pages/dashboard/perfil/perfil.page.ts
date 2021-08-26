import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  titulo = 'Mi Perfil';
  userInfo;

  acciones: any[] = [
    { nombre: 'Deportes', redirect: '/menu/perfil/deportes' },
    { nombre: 'Datos Personales', redirect: '/menu/perfil/datos-personales' },
    { nombre: 'Cambiar Clave', redirect: '/menu/perfil/cambiar-clave' },
    { nombre: 'Mi Club', redirect: '/menu/perfil/mi-club' },
  ]

  constructor(private _storageService: StorageService) { }

  ngOnInit() {
    this.userInfo = this._storageService.localGet('userInfo');
  }

}
