import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ingresar-password',
  templateUrl: './ingresar-password.page.html',
  styleUrls: ['./ingresar-password.page.scss'],
})
export class IngresarPasswordPage implements OnInit {
  form: FormGroup;


  constructor(private router: Router, 
              private fb: FormBuilder, 
              public toastController: ToastController,
              private _usuarioService: UsuarioService) { 
    this.form = this.fb.group({
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  siguiente() {
    console.log('llegue')
   
    // Obtenemos datos
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
    this._usuarioService.password = password;
    
    this.router.navigateByUrl('/login/ingresar-club')
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      color: 'dark',
      duration: 3000
    });
    toast.present();
  }

}
