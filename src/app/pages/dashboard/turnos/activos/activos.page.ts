import { Component, OnInit } from '@angular/core';
import { TurnoService } from 'src/app/services/turno.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-activos',
  templateUrl: './activos.page.html',
  styleUrls: ['./activos.page.scss'],
})
export class ActivosPage implements OnInit {
  titulo = 'Activos';
  activos;

  constructor(private _turnoService: TurnoService,
    private router: Router) { }

  ngOnInit() {

    this._turnoService.obtenerTurnos().subscribe(data => {
      console.log(data)
      this.activos = data;
      
    }, error => {
      //this.dismissLoading();
      console.log(error);
      //this.mensaje('Opss.. ocurrio un error');
    })

  }

  turnoConfirmado(id){
    this.router.navigate(['/menu/turnos/confirmado/',id ])
  }

}
