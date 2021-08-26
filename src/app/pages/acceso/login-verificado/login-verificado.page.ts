import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { StorageService } from 'src/app/services/storage.service';
import jwt_decode from 'jwt-decode';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';

@Component({
  selector: 'app-login-verificado',
  templateUrl: './login-verificado.page.html',
  styleUrls: ['./login-verificado.page.scss'],
})
export class LoginVerificadoPage implements OnInit {
  form: FormGroup;
  loading: HTMLIonLoadingElement;
  nombre = 'xXx';
  userInfo: any = {
    nombre: '',
    rol: '',
    club: ''
  }

  constructor(private fcm: FCM,private router: Router,
    private fb: FormBuilder,
    private _usuarioService: UsuarioService,
    private _loginService: LoginService,
    private _storageService: StorageService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController) {
    this.form = this.fb.group({
      correo: [{ value: this._usuarioService.nombreUsuario, disabled: true }, Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
    //   this.obtenerNombre();
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  obtenerNombre() {

  }

  recuperarClave() {
    this.router.navigateByUrl('/login/olvidaste-tu-clave');
    //this.presentAlertConfirm();
  }

  /*async presentAlertConfirm() {
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
  }*/

  /*recuperar() {
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
  }*/


  validar() {
    const correo = this._usuarioService.nombreUsuario;
    const password = this.form.value.password;

    const usuario: any = {
      email: correo,
      password: password
    }

    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present()

      this._loginService.login(usuario).subscribe(data => {
        // this._storageService.set('token', data.token);
        localStorage.setItem('token', data.token)
        const tokenInfo = this.getDecodedAccessToken(data.token); 
        const expireDate = tokenInfo.exp; 
        localStorage.setItem('tokenInfo', JSON.stringify(tokenInfo))
        console.log('tokenInfo ', JSON.parse(localStorage.getItem('tokenInfo')));
      
        this._usuarioService.obtenerUsuario(tokenInfo.userId).subscribe(data => {
          this.userInfo.nombre = data.persona['nombre']
          this.userInfo.rol = tokenInfo.rol;
          this.userInfo.club = 'club';

          /*this.fcm.getToken().then(token => {
            console.log(token)
            this._usuarioService.guardarToken(token).subscribe(data => {
                console.log(data)
            });
          });*/
      
       
          this._storageService.localSet('userInfo', this.userInfo)
          this.dismissLoading();
          this.router.navigateByUrl('/menu');
     
        }, error => {
          this.dismissLoading();
          console.log(error);
          this.mensaje('Opss.. ocurrio un error');
        })
     

       
        // console.log(
        //   this._storageService.get('token')
        // )
      }, error => {
        console.log(error);
        this.dismissLoading();
        this.error(error);
      })

    
    })


  }

  error(error) {
    switch (error.error.error) {
      case 'su estado esta pendiente no puede ingresar':
        this.mensaje('Su estado esta pendiente, no puede ingresar');
        break;
      case 'The password is invalid or the user does not have a password.':
        this.mensaje('Usuario o contraseña invalidos');
        this.form.controls.password.reset();
        //this.form.reset();
        break;
      case 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.':
        this.mensaje('Muchos intentos fallidos. Intente mas tarde');
        break;
      default:
        this.mensaje('Opss.. ocurrio un error');
        break;
    }
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

