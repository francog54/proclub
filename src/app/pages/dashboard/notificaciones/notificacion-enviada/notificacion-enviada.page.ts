import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacionService } from 'src/app/services/notificacion.service';

@Component({
  selector: 'app-notificacion-enviada',
  templateUrl: './notificacion-enviada.page.html',
  styleUrls: ['./notificacion-enviada.page.scss'],
})
export class NotificacionEnviadaPage implements OnInit {
  titulo = 'Notificacion enviada';

  constructor(private _notificacionService: NotificacionService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.snapshot.params.id
    // this._notificacionService.verNotificacion(id).subscribe(data => {
    //   console.log(data)

    // }, error => {
    //   //this.dismissLoading();
    //   console.log(error);
    //   //this.mensaje('Opss.. ocurrio un error');
    // })
  }

}
