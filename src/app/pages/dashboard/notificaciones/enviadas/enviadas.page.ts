import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificacionService } from 'src/app/services/notificacion.service';

@Component({
  selector: 'app-enviadas',
  templateUrl: './enviadas.page.html',
  styleUrls: ['./enviadas.page.scss'],
})
export class EnviadasPage implements OnInit {
  notificacionesEnviadas;

  constructor(private _notificacionService: NotificacionService, private router: Router) { }

  ngOnInit() {
    this._notificacionService.obtenerNotificaciones().subscribe(data => {
      this.notificacionesEnviadas = data;
      console.log(this.notificacionesEnviadas)

    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })
  }

  verNotificacion() {
    this.router.navigate(['/menu/notificaciones/notificacion-enviada'])
  }

}
