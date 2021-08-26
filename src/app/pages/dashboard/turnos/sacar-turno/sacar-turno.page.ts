import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TurnoService } from 'src/app/services/turno.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

interface Turno {
  activo: number;
  id: number;
  cupo: string;
  fecha: string;
  horaDesde: string;
  horaHasta: string;
}

@Component({
  selector: 'app-sacar-turno',
  templateUrl: './sacar-turno.page.html',
  styleUrls: ['./sacar-turno.page.scss'],
})
export class SacarTurnoPage implements OnInit {
  titulo = 'Elegir turno';
  turno: Turno;
  customMesDia: any;
  customHorario: any;
  dia; mes;
  tokenInfo;
  turnos;
  idTurno;


  constructor(private _turnoService: TurnoService,private route: ActivatedRoute
    ,public alertController: AlertController, private router: Router, 
    private _storageService: StorageService
    ) {
      this.tokenInfo = this._storageService.localGet('tokenInfo');
      this.customMesDia = {
        buttons: [{
          text: 'Seleccionar',
          handler: (data) => {
              this.dia = data.day.text;
              this.mes = data.month.text;
              console.log(data)
          }
        }]
      }
      this.customHorario = {
        buttons: [{
          text: 'Seleccionar',
          handler: (data) => {
              console.log(data)
          }
        }]
      }
     }

  ngOnInit() {

    this._turnoService.obtenerResverasXUsuario(this.tokenInfo.userId).subscribe(data => {
      //console.log(data)
      //this.turnos = data
    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })

    
    this._turnoService.obtenerTurnosInactivos().subscribe(data => {
 
      this.turnos = data
      console.log(this.turnos);

    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })

  }

  cancelarTurno() {
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar turno',
      message: 'Estás por cancelar el turno',
      buttons: [
        {
          text: 'VOLVER',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Operacion cancelada');
          }
        }, {
          text: 'SI CANCELAR',
          handler: () => {
            console.log('Operacion aceptada');
            //this.recuperar();
          }
        }
      ]
    });

    await alert.present();
  }

  seleccionaTurno(id){
      console.log(id)
      this.idTurno = id;
  }

  turnoConfirmado(){

    this._turnoService.crearReserva(this.tokenInfo.userId, this.idTurno).subscribe(data => {
      console.log(data)
      
    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })


    this.router.navigate(['/menu/turnos/confirmado/', this.idTurno ])
  }



}
