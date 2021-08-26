import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { EncuestaService } from 'src/app/services/encuesta.service';

@Component({
  selector: 'app-enviar',
  templateUrl: './enviar.page.html',
  styleUrls: ['./enviar.page.scss'],
})
export class EnviarPage implements OnInit {
  titulo = 'Enviar'
  loading: HTMLIonLoadingElement;
  tituloEncuesta;
  descripcion;
  pregunta;
  opcion;
  destinatarios = [];

  constructor(private router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public _encuestaService: EncuestaService) {

      this.titulo = this._encuestaService.titulo;
      this.descripcion = this._encuestaService.descripcion;
      this.pregunta = this._encuestaService.pregunta;
      this.opcion = this._encuestaService.opcion;
      this.destinatarios = this._encuestaService.destinatarios;
   }

  ngOnInit() {


  }

  
  siguiente() {
 
  

       /*this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present()

   this._usuarioService.signup(usuario).subscribe(data => {
        console.log(data);
        this.dismissLoading();
        this.router.navigateByUrl('/login/verificar-cuenta');
      }, error => {
        console.log(error);
        this.dismissLoading();
        this.mensaje('Opss.. ocurrio un error');
      })
    })*/



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
