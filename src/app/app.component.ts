import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private fcm: FCM,
    private router: Router,
    private _usuarioService: UsuarioService,
    public platform: Platform
  ) {
    this.platform.ready().then(() => {
      console.warn(this.platform.platforms());
      this.fcm.hasPermission().then((hasPermission) => {
        if (hasPermission) {
          console.log('Has permission!');
        }
      });

      this.fcm.onTokenRefresh().subscribe((token) => {
        this._usuarioService.guardarToken(token).subscribe((data) => {
          console.log(data);
        });
      });
    });

    this.router.navigateByUrl('splash');
  }
}
