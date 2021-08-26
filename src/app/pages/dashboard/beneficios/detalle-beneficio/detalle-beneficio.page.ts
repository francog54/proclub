import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beneficio } from 'src/app/models/beneficio.model';
import { BeneficioService } from 'src/app/services/beneficio.service';

@Component({
  selector: 'app-detalle-beneficio',
  templateUrl: './detalle-beneficio.page.html',
  styleUrls: ['./detalle-beneficio.page.scss'],
})
export class DetalleBeneficioPage implements OnInit {
  titulo = 'Beneficios';
  beneficio: Beneficio;

  constructor(private route: ActivatedRoute, private beneficioService: BeneficioService) {
    this.beneficioService.obtenerBeneficiosxId(this.route.snapshot.params.idBeneficio).subscribe(data => {
      this.beneficio = data;
      console.log('BENEFICIO DETALLE: ', this.beneficio);
    });
  }

  ngOnInit() {}
}
