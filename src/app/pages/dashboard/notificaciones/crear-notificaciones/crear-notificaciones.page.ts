import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { NotificacionService } from 'src/app/services/notificacion.service';

@Component({
  selector: 'app-crear-notificaciones',
  templateUrl: './crear-notificaciones.page.html',
  styleUrls: ['./crear-notificaciones.page.scss'],
})
export class CrearNotificacionesPage implements OnInit {
  titulo = 'Crear notificación';
  form: FormGroup;
  loading: HTMLIonLoadingElement;

  constructor(private router: Router, private fb: FormBuilder,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public _notificacionService: NotificacionService) {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      dirigir: ['', Validators.required]
    })
  }

  ngOnInit() {

  }

  siguiente() {


    this._notificacionService.titulo = this.form.value.titulo;
    this._notificacionService.descripcion = this.form.value.descripcion;

    const notificacion: any = {
      titulo: this._notificacionService.titulo,
      descripcion: this._notificacionService.descripcion,
    }

    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present()

      this._notificacionService.crearNotificacion(notificacion).subscribe(data => {
        this._notificacionService.idNotificacion = data.id;
        this.dismissLoading();
        this.router.navigate(['/menu/notificaciones/destinatarios-notificaciones'])
      }, error => {
        this.mensaje('Opss.. ocurrio un error');
        this.dismissLoading();
        console.log(error);
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
