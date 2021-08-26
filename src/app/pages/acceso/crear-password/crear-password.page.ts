import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-password',
  templateUrl: './crear-password.page.html',
  styleUrls: ['./crear-password.page.scss'],
})
export class CrearPasswordPage implements OnInit {
  // correo = '';
  form: FormGroup;

  constructor(private _usuarioService: UsuarioService,
    private router: Router, private fb: FormBuilder,
    public toastController: ToastController,
    public loadingController: LoadingController) {
    this.form = this.fb.group({
      correo: [{ value: this._usuarioService.nombreUsuario, disabled: true }, Validators.required],
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required],
    })
  }

  ngOnInit() {

  }

  ingresar() {

    // Obtenemos datos
    const correo: string = this._usuarioService.nombreUsuario;
    const password: string = this.form.value.password;
    const repetirPassword: string = this.form.value.repetirPassword;


    // Validamos que las passwords sean iguales
    if (password !== repetirPassword) {
      this.presentToast('Las contraseñas no coinciden');
      return;
    }

    // Validamos que la password tenga al menos 6 caracteres
    if (password.length < 6) {
      this.presentToast('La contraseña debe contener al menos 6 caracteres');
      return;
    }

    const usuario: any = {
      email: correo,
      password: password,
    }

    // Enviamos email y password para almacenarlo en FIREBASE
    this.presentLoading();
    this._usuarioService.registrarFirebase(usuario).subscribe(data => {
      this.loadingController.dismiss();
      this.presentToast(`El usuario ${correo} fue registrado con exito!`);
      this.router.navigateByUrl('/login')
    }, error => {
      console.log(error);
      this.presentToast('Opss.. ocurrio un error!');
    })


  }

  // Si el usuario vuelve a la pantalla con el boton 'volver' (del cel, no de la app), limpiamos el password
  ionViewWillEnter() {
    this.form.patchValue({
      password: '',
      repetirPassword: '',
    })
  }


  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'dark',
      duration: 3000
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Espere...',     
    });
    await loading.present();
  }

}
