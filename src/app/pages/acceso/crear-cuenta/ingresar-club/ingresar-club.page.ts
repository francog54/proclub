import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ClubService } from 'src/app/services/club.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

class Club {
  public id: number;
  public nombre: string;
}

@Component({
  selector: 'app-ingresar-club',
  templateUrl: './ingresar-club.page.html',
  styleUrls: ['./ingresar-club.page.scss'],
})
export class IngresarClubPage implements OnInit {
  //listClubes: any[] = [];
  idClub: number;
  idDisciplina: number;
  listDisciplina: any[] = [];
  form: FormGroup;
  loading: HTMLIonLoadingElement;
  listClubes: Club[];
  club: Club;

  constructor(private router: Router,
    private _clubService: ClubService,
    private fb: FormBuilder,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private _usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private _storageService: StorageService) { 
      this.form = this.fb.group({
        club: ['', Validators.required],
        disciplina: ['', Validators.required],
      })

  
    }

  ngOnInit() {
    this.obtenerClubes();
   
    
  }

  clubChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.clubSeleccionado(event.value.id)
    console.log('club:', event.value.id);
  }

  siguiente() {
    const idClub = this.form.value.club.id;
    const idDisciplina = this.form.value.disciplina;
    console.log(idClub)
    const usuario: any = {
      email: this._usuarioService.nombreUsuario,
      nombre: this._usuarioService.nombre,
      apellido: this._usuarioService.apellido,
      documento: this._usuarioService.documento,
      password: this._usuarioService.password,
      club: idClub,
      deporte: idDisciplina,
    }
    console.log(usuario);


    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present()
      const tokenInfo = this._storageService.localGet('tokenInfo');
     // console.log(tokenInfo.clubId,this.route.snapshot.params.idClub)
      if(this.route.snapshot.params.idClub){
          
          this._usuarioService.agregarClub(tokenInfo.clubId,this.route.snapshot.params.idClub).subscribe(data => {
            console.log(data);
            this.dismissLoading();
            this.router.navigateByUrl('/login/verificar-cuenta');
          }, error => {
            console.log(error);
            this.dismissLoading();
            this.mensaje('Opss.. ocurrio un error');
          })

      }else{
          this._usuarioService.signup(usuario).subscribe(data => {
            console.log(data);
            this.dismissLoading();
            this.router.navigateByUrl('/login/verificar-cuenta');
          }, error => {
            console.log(error);
            this.dismissLoading();
            this.mensaje('Opss.. ocurrio un error');
          })
      }

  
    })



  }

  obtenerClubes() {

    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present()

      this._clubService.obtenerClubes().subscribe(data => {
        this.dismissLoading();
        this.listClubes = data;
        console.log(this.listClubes)
      
        if(this.route.snapshot.params.idClub){
        
          this.club = this.listClubes.filter(club => club.id == this.route.snapshot.params.idClub)[0]
       
          setTimeout(() => {
            this.form.patchValue({
              club: {id:this.club.id , nombre:this.club.nombre}
            })
            this.clubSeleccionado(this.club.id)
          }, 500);
       
        }
  
      }, error => {
        this.dismissLoading();
        console.log(error);
        this.mensaje('Opss.. ocurrio un error');
      })
    })

   
  }

  clubSeleccionado(idClub) {

    // Obtenemos idClub
    //const idClub = this.form.value.club;
  
    // Reseteamos array de disciplinas y el valor actual de disciplina
    this.listDisciplina = [];
    this.form.patchValue({
      disciplina: ''
    })

    // Spinner.. 
    this.presentLoading().then((loadRes: any) => {
      this.loading = loadRes
      this.loading.present()

      this._clubService.obtenerDisciplinasByIdClub(idClub).subscribe(data => {
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
