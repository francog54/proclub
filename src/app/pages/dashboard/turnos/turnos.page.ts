import { Component, OnInit } from '@angular/core';
import { TurnoService } from 'src/app/services/turno.service';
import { ActionSheetController, PopoverController } from '@ionic/angular';
import { Espacios } from 'src/app/models/espacios.model';
import { Router } from '@angular/router';
import { EspacioService } from 'src/app/services/espacio.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.page.html',
  styleUrls: ['./turnos.page.scss'],
})
export class TurnosPage implements OnInit {
  titulo = 'Turnos';
  espacios: Espacios[];

  constructor(private _turnoService: TurnoService,  
    private popoverCtrl: PopoverController,
    public actionSheetController: ActionSheetController,
    private router: Router,   private espacioService: EspacioService) { 
      this.espacioService.getEspacios().subscribe(data => this.espacios = data);
    }

  ngOnInit() {

    this._turnoService.obtenerTurnos().subscribe(data => {
      console.log(data)
      
    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })

  }

  async mostrarPop(event) {

    const actionSheet = await this.actionSheetController.create({
      header: 'Selecciona un espacio',
      buttons: this.returnButtons()
    });
    await actionSheet.present();

  }

  returnButtons()  {
    const buttons = [];
    if (this.espacios.length > 0) {
      this.espacios.forEach((data) => {
        buttons.push({
          text: data.nombre,
          icon: 'football-outline',
          handler: () => {
            console.log('ESPACIO SELECCIONADO', data);
            this.router.navigate(['/menu/turnos/sacar-turno/', data.id]);
          },
        });
      });
    }
    return buttons;
  }


}
