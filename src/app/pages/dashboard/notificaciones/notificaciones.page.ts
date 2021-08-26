import { Component, OnInit } from '@angular/core';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { PopoverController } from '@ionic/angular';

import { NotificacionService } from 'src/app/services/notificacion.service';
import { PopinfoComponent } from './popinfo/popinfo.component';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {
  titulo = 'Notificaciones';
  notificacionesRecibidas;

  constructor(private fcm: FCM, private _notificacionService: NotificacionService, private popoverCtrl: PopoverController,
    public platform:Platform) { }

  ngOnInit() {

    this._notificacionService.obtenerNotificaciones().subscribe(data => {
      this.notificacionesRecibidas = data;
      console.log(this.notificacionesRecibidas)

    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })

    // this.fcm.subscribeToTopic('marketing');

    this.platform.ready().then(() => {
        this.fcm.getToken().then(token => {
          console.log(token)
          //backend.registerToken(token);
        });
    
        this.fcm.onNotification().subscribe(data => {
          if (data.wasTapped) {
            console.log("Received in background");
          } else {
            console.log("Received in foreground");
          };
        });
    
        this.fcm.onTokenRefresh().subscribe(token => {
          //backend.registerToken(token);
        });
    
        this.fcm.hasPermission().then(hasPermission => {
          if (hasPermission) {
            console.log("Has permission!");
          }
        })
      });
    // this.fcm.clearAllNotifications();
 
    // this.fcm.unsubscribeFromTopic('marketing');
 
  }

  async mostrarPop(event) {

    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: event,
      id: 'popinfo'
    });

    await popover.present();

  }

}
