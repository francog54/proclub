import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-olvidaste-tu-clave',
  templateUrl: './olvidaste-tu-clave.page.html',
  styleUrls: ['./olvidaste-tu-clave.page.scss'],
})
export class OlvidasteTuClavePage implements OnInit {
nombre: string = '';
loading: HTMLIonLoadingElement;
  constructor(private _usuarioService: UsuarioService,
              private router: Router,
              public toastController: ToastController,
              public loadingController: LoadingController,
              public alertController: AlertController) { }

  ngOnInit() {
    this.nombre = this._usuarioService.nombreUsuario;
    console.log(this._usuarioService.nombreUsuario);
  }

  crearCuenta() {
    this.router.navigateByUrl('/login/ingresar-cuenta');
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Recuperar contraseña',
      message: 'Está seguro que desea recuperar su contraseña?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Operacion cancelada');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Operacion aceptada');
            this.recuperar();
          }
        }
      ]
    });

    await alert.present();
  }

  recuperarClave() {
    this.presentAlertConfirm();
  }

  recuperar() {
    const usuario: any = {
      email: this._usuarioService.nombreUsuario
    }

    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present()

      this._usuarioService.recuperarPassword(usuario).subscribe(data => {
        console.log(data);
        this.dismissLoading();
        this.mensaje('Enviamos un correo, revise su bandeja de entrada');
      }, error => {
        console.log(error);
        this.dismissLoading();
        this.mensaje('Opss.. ocurrio un error');
      })
    })
  }

  presentLoading() {
    if (this.loading) {
      this.loading.dismiss();
    }
    return new Promise((resolve) => {
      resolve(this.loadingController.create({
        message: 'Espere...'
      }));
    })
  }

  async dismissLoading(): Promise<void> {
    if (this.loading) {
      this.loading.dismiss();
    }
  }


  async mensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'dark',
      duration: 3000
    });
    toast.present();
  }


}
