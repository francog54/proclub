import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { EncuestaService } from 'src/app/services/encuesta.service';

interface Pregunta {
  id: number;
  titulo: string;
}

interface Opcion {
  id: number;
  titulo: string;
}

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {
  titulo = 'Preguntas'
  form: FormGroup;
  loading: HTMLIonLoadingElement;
  idPregunta;
  preguntas: Pregunta[] = [];

  opciones: Opcion[] = [
    {
      id: 1,
      titulo: 'Opción 1',
    },
    {
      id: 2,
      titulo: 'Opción 2',
    },
    {
      id: 3,
      titulo: 'Opción 3',
    }
  ];

  constructor(private router: Router,private fb: FormBuilder,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertCtrl: AlertController,
    public _encuestaService: EncuestaService) {

    this.form = this.fb.group({
      pregunta: ['', Validators.required],
      opcion: ['', Validators.required],
    })

   }

  ngOnInit() {

    //this.obtenerPreguntas()

  }

  obtenerPreguntas(){

    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present();
      let idEncuesta = this._encuestaService.idEncuesta;  

      this._encuestaService.obtenerPreguntas(idEncuesta).subscribe(data => {
          this.preguntas = data;
          console.log(data);

      
          this.dismissLoading();
   
        }, error => {
          console.log(error);
          this.dismissLoading();
          this.mensaje('Opss.. ocurrio un error');
        })
      })

  }

  onChange( e ) {
   
  
    console.log(e.target.value)
  }

  async agregarPregunta() {
    const alert = await this.alertCtrl.create({
      header: 'Nueva Pregunta',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Pregunta'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data)
            this.guardarPregunta(data.titulo);
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async agregarOpcion(idPregunta){
    this.idPregunta = idPregunta;
    const alert = await this.alertCtrl.create({
      header: 'Nueva Opción',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Opción'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data)
            this.guardarRespuesta(data.titulo);
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();

  }

  guardarPregunta(pregunta){
    let titulo = pregunta;
    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present();
      let idEncuesta = this._encuestaService.idEncuesta;  

      const pregunta: any = {
        titulo: titulo,
      }

      this._encuestaService.crearPregunta(idEncuesta,pregunta).subscribe(data => {
          console.log(data);
          this.obtenerPreguntas();
          this.dismissLoading();
   
        }, error => {
          console.log(error);
          this.dismissLoading();
          this.mensaje('Opss.. ocurrio un error');
        })
      })

  }


  guardarRespuesta(respuesta){
    let titulo = respuesta;
    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present();
 

      const respuesta: any = {
        titulo: titulo,
      }

      this._encuestaService.crearRespuesta(this.idPregunta,respuesta).subscribe(data => {
          console.log(data);
          this.obtenerPreguntas();
          this.dismissLoading();
   
        }, error => {
          console.log(error);
          this.dismissLoading();
          this.mensaje('Opss.. ocurrio un error');
        })
      })

  }

  getOpciones(idPregunta){
     console.log('respuestas')
      console.log(idPregunta)

   /*  this._encuestaService.obtenerRespuestas(idPregunta).subscribe(data => {
          console.log('respuestas')
         console.log(data);
      
        }, error => {
          console.log(error);
          this.mensaje('Opss.. ocurrio un error');
        })
      */
  }
  
  siguiente() {
 

   

      this.router.navigate(['/menu/notificaciones/destinatarios'])

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
