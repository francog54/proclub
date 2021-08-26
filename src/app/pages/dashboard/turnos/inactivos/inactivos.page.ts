import { Component, OnInit } from '@angular/core';
import { TurnoService } from 'src/app/services/turno.service';

@Component({
  selector: 'app-inactivos',
  templateUrl: './inactivos.page.html',
  styleUrls: ['./inactivos.page.scss'],
})
export class InactivosPage implements OnInit {
  titulo = 'Inactivos';
  inactivos;
  constructor(private _turnoService: TurnoService,) { }

  ngOnInit() {

    this._turnoService.obtenerTurnosInactivos().subscribe(data => {
      console.log(data)
      this.inactivos = data;
      
    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })

  }

}
