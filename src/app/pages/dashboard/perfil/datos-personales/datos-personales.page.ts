import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { StorageService } from 'src/app/services/storage.service';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {
  titulo = 'Datos Personales';
  form: FormGroup;
  usuario: object;
  tokenInfo;
  loading: HTMLIonLoadingElement;

 

  constructor(private _usuarioService: UsuarioService,
    private _storageService: StorageService,
    private fb: FormBuilder,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController
    ) {
      this.form = this.fb.group({
        correo: ['', Validators.required],
        documento: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
        calle: ['', Validators.required],
      })

      this.tokenInfo = this._storageService.localGet('tokenInfo');

    
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

    ngOnInit() {
    
      this.presentLoading().then((loadRes: any) => {
        this.loading = loadRes
        this.loading.present()
  
    
          this._usuarioService.obtenerUsuario(this.tokenInfo.userId).subscribe(data => {
            console.log(data)
            this.dismissLoading();
            this.usuario = data;
            this.form.setValue({
              correo: this.usuario['persona'].correo,
              documento: this.usuario['persona'].documento,
              fechaNacimiento: this.usuario['persona'].fechaNacimiento,
              calle: this.usuario['persona'].direccionPersona,
            });
          }, error => {
            this.dismissLoading();
            console.log(error);
            this.mensaje('Opss.. ocurrio un error');
          })

      })

  }

  guardaDatos() {
    const datosUsuario = this.form.value;
    datosUsuario.direccion = { 
      calle: this.form.value.calle,

    };
   
    this._usuarioService.modificarUsuario( this.tokenInfo.clubId,  this.tokenInfo.userId ,this.form.value).subscribe(data => {
      console.log(data)
 
    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })

  

  }

}
