import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TurnoService } from 'src/app/services/turno.service';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/helpers/master.service';

interface Turno {
  activo: number;
  id: number;
  cupo: string;
  fecha: string;
  horaDesde: string;
  horaHasta: string;
}

@Component({
  selector: 'app-confirmado',
  templateUrl: './confirmado.page.html',
  styleUrls: ['./confirmado.page.scss'],
})
export class ConfirmadoPage implements OnInit {
  titulo = 'Turno confirmado';
  turno: Turno;

  constructor(private _turnoService: TurnoService,private route: ActivatedRoute
    ,public alertController: AlertController,  private router: Router,
    public masterService: MasterService) { }

  ngOnInit() {

    
    this._turnoService.obtenerTurno(this.route.snapshot.params.id).subscribe(data => {
 
      this.turno = data
      console.log(this.turno)

    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })

  }

  confirmarTurno() {
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar turno',
      message: 'Estás por confirmar el turno',
      buttons: [
        {
          text: 'VOLVER',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

            this.masterService.setSplash({
              img: 'assets/img/splash/error.png',
              redirecTo: '/menu',
              titulo: 'No se pudo reservar tu turno',
              subtitulo: '',
            });

            this.router.navigateByUrl('/menu/splash-generico');
            console.log('Operacion cancelada');
          }
        }, {
          text: 'SI CONFIRMAR',
          handler: () => {

            this.masterService.setSplash({
              img: 'assets/img/splash/correcto.png',
              redirecTo: '/menu',
              titulo: '¡Turno confirmado con éxito!',
              subtitulo: '',
            });
            this.router.navigateByUrl('/menu/splash-generico');

            console.log('Operacion aceptada');
            //this.recuperar();
          }
        }
      ]
    });

    await alert.present();
  }

  splash(){
    this.masterService.setSplash({
      img: 'assets/img/splash/correcto.png',
      redirecTo: '/menu',
      titulo: 'Titulo',
      subtitulo: 'Le enviamos una notificación al socio',
    });
    this.router.navigateByUrl('/menu/splash-generico');
  }


}
