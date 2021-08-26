import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacionService } from 'src/app/services/notificacion.service';

@Component({
  selector: 'app-recibidas',
  templateUrl: './recibidas.page.html',
  styleUrls: ['./recibidas.page.scss'],
})
export class RecibidasPage implements OnInit {
  notificacionesRecibidas;

  constructor(private _notificacionService: NotificacionService, private router: Router) { }

  ngOnInit() {
    this._notificacionService.obtenerNotificaciones().subscribe(data => {
      this.notificacionesRecibidas = data;
      console.log(this.notificacionesRecibidas)

    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })
  }

  verNotificacion(id) {
    this.router.navigate(['/menu/notificaciones/notificacion', id])
  }


}
