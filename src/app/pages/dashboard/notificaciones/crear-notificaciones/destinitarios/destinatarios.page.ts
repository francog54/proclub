import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { EncuestaService } from 'src/app/services/encuesta.service';
import { Usuario } from 'src/app/class/usuario.model';
import { Club } from 'src/app/class/club.model';
import { Disciplina } from 'src/app/class/disciplina.model';
import { Destinatario } from 'src/app/class/disciplina.model copy';
import { ClubService } from 'src/app/services/club.service';



@Component({
  selector: 'app-destinatarios',
  templateUrl: './destinatarios.page.html',
  styleUrls: ['./destinatarios.page.scss'],
})
export class DestinatariosPage implements OnInit {
  titulo = 'Destinatarios'
  form: FormGroup;
  loading: HTMLIonLoadingElement;
  listDisciplina;
  listDivisiones;
  listPosiciones;
  disciplinaId;

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
    public _encuestaService: EncuestaService,
    private _clubService: ClubService,) {

    this.form = this.fb.group({
      usuario: ['', Validators.required],
      club: ['', Validators.required],
      disciplina: ['', Validators.required],
      posicion: ['', Validators.required],
      division: ['', Validators.required],
    })

   }

  ngOnInit() {

      // Obtenemos idClub
    //const idClub = this.form.value.club;
  
    // Reseteamos array de disciplinas y el valor actual de disciplina
    this.listDisciplina = [];
 

    // Spinner.. 
    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present()

      this._clubService.obtenerDisciplinasByIdClub(135).subscribe(data => {
        console.log(data)
        this.listDisciplina = data;
        this.dismissLoading();
      }, error => {
        console.log(error);
        this.dismissLoading();
        this.mensaje('Opss.. ocurrio un error');
      })
    })

  }

  posiciones(){
    this.listPosiciones= [];
    

    // Spinner.. 
    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present()

      this._clubService.obtenerPosicionesxDisciplina(this.disciplinaId).subscribe(data => {
        console.log(data)
        this.listPosiciones = data;
        this.dismissLoading();
      }, error => {
        console.log(error);
        this.dismissLoading();
        this.mensaje('Opss.. ocurrio un error');
      })
    })
  }


  divisiones(e){
    this.listDivisiones= [];
    this.disciplinaId = e.target.value.disciplina.id;
  
    console.log(e.target.value)
    // Spinner.. 
    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present()

      this._clubService.obtenerDivisionesxDisciplina(135,e.target.value.disciplina.id).subscribe(data => {
        console.log(data)
        this.listDivisiones = data;
        this.dismissLoading();
      }, error => {
        console.log(error);
        this.dismissLoading();
        this.mensaje('Opss.. ocurrio un error');
      })
    })
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
