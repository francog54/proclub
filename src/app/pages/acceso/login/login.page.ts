import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  loading: HTMLIonLoadingElement;
  spinner: boolean;
  checked: boolean;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _usuarioService: UsuarioService,
    private _loginService: LoginService,
    public loadingController: LoadingController,
    public toastController: ToastController) {
    this.spinner = false;
    this.checked = false;
    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.form.patchValue({
      correo: ''
    });
  }

  validar() {
    const usuario: any = {
      correo: this.form.value.correo
    }

    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      // this.loading.present()
      this.spinner = true

      this._loginService.validate(usuario).subscribe(data => {
        this.dismissLoading();
        this.redirect(data);
      }, error => {
        this.mensaje('Opss.. ocurrio un error');
        this.dismissLoading();
        console.log(error);
      })
    })

  }

  redirect(data: any) {
    this._usuarioService.nombreUsuario = this.form.value.correo;
    switch (data.codigo) {
      case 1:
        this.router.navigateByUrl('/login/usuario-no-registrado');
        break;
      case 2:
        this.router.navigateByUrl('/login/crear-password');
        break;
      case 3:
        this.router.navigateByUrl('/login/login-verificado');
        break;
      default:
        this.mensaje('Opss.. ocurrio un error!')
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
    // if (this.loading) {
    //   this.loading.dismiss();
    // }
    if (this.spinner) {
      this.spinner = false;
      this.checked = true;
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
