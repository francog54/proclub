import { EspacioService } from 'src/app/services/espacio.service';
import { IngresoService } from './../../../../services/ingreso.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Espacios } from 'src/app/models/espacios.model';
import { Ingresos } from 'src/app/models/ingresos.model';

@Component({
  selector: 'app-listado-ingresos',
  templateUrl: './listado-ingresos.page.html',
  styleUrls: ['./listado-ingresos.page.scss'],
})
export class ListadoIngresosPage implements OnInit {
  titulo = '';
  ingreso: Ingresos = null;
  reservas: Ingresos[] = [];

  constructor(private route: ActivatedRoute, private ingresoService: IngresoService, private espacioService: EspacioService) {
    this.ingreso = this.ingresoService.ingresoSeleccionado;
    this.ingresoService.obtenerIngresoByReserva(this.ingreso.reserva.id).subscribe(data => {
      console.log('RESERVAS', data);
      this.reservas = data;
    });
  }

  ngOnInit() {
  }

}
