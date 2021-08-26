import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { Usuario } from 'src/app/class/usuario.model';
import { Club } from 'src/app/class/club.model';
import { Disciplina } from 'src/app/class/disciplina.model';
import { Destinatario } from 'src/app/class/disciplina.model copy';



@Component({
  selector: 'app-destinatarios',
  templateUrl: './destinatarios.page.html',
  styleUrls: ['./destinatarios.page.scss'],
})
export class DestinatariosPage implements OnInit {
  titulo = 'Destinatarios'
  form: FormGroup;
  loading: HTMLIonLoadingElement;

  usuarios: Usuario[] = [
    {
      id: 1,
      rol: 'Manager/Profesor',
    },
    {
      id: 2,
      rol: 'Socio',
    }
  ];

  clubes: Club[] = [
    {
      id: 1,
      nombre: 'Córdoba Athletic club',
    },
    {
      id: 2,
      nombre: 'Córdoba Athletic club 2',
    }
  ];

  disciplinas: Disciplina[] = [
    {
      id: 1,
      nombre: 'Fútbol',
    },
    {
      id: 2,
      nombre: 'Basquet',
    }
  ];

  constructor(private router: Router,private fb: FormBuilder,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public _encuestaService: EncuestaService) {

    this.form = this.fb.group({
      usuario: ['', Validators.required],
      club: ['', Validators.required],
      disciplina: ['', Validators.required],
    })

   }

  ngOnInit() {

  }

  onChange( e ) {
   
  
    console.log(e.target.value)
  }
  
  siguiente() {

    let destinatario = {} as Destinatario;
    destinatario.usuario = this.form.value.usuario;
    destinatario.club = this.form.value.club;
    destinatario.disciplina = this.form.value.disciplina;

    this._encuestaService.destinatarios.push(destinatario);

    this.router.navigate(['/menu/notificaciones/enviar'])

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
