import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { EncuestaService } from 'src/app/services/encuesta.service';

@Component({
  selector: 'app-crear-encuesta',
  templateUrl: './crear-encuesta.page.html',
  styleUrls: ['./crear-encuesta.page.scss'],
})
export class CrearEncuestaPage implements OnInit {
  titulo = 'Crear encuesta'
  form: FormGroup;
  loading: HTMLIonLoadingElement;

  constructor(private router: Router,private fb: FormBuilder,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public _encuestaService: EncuestaService) {

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
    })

   }

  ngOnInit() {

  }

  
  siguiente() {
 
    
    this._encuestaService.titulo = this.form.value.titulo;
    this._encuestaService.descripcion = this.form.value.descripcion;

    const encuesta: any = {
      titulo: this._encuestaService.titulo,
      descripcion: this._encuestaService.descripcion,
    }

    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present()

      this._encuestaService.crearEncuesta(encuesta).subscribe(data => {
        this._encuestaService.idEncuesta = data.id;
        this.dismissLoading();
        this.router.navigate(['/menu/notificaciones/preguntas'])
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
