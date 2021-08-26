import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beneficio, Rubro } from 'src/app/models/beneficio.model';
import { BeneficioService } from 'src/app/services/beneficio.service';
import { RubroService } from 'src/app/services/rubro.service';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.page.html',
  styleUrls: ['./beneficios.page.scss'],
})
export class BeneficiosPage implements OnInit {
  titulo = 'Beneficios';
  beneficios: Beneficio[];
  beneficiosOriginal: Beneficio[];

  rubros: Rubro[];
  rubroSeleccionado: Rubro;

  searchbar: string;

  constructor(
    private beneficioService: BeneficioService,
    private router: Router,
    private rubroService: RubroService
  ) {}

  ngOnInit() {
    this.beneficioService.obtenerBeneficios().subscribe(
      (data) => {
        this.beneficios = data;
        this.beneficiosOriginal = data;
        console.log('BENEFICIOS: ', this.beneficios);
      },
      (error) => {
        console.log(error);
      }
    );
    this.rubroService.obtenerRubros().subscribe(
      (data) => {
        this.rubros = data;
        console.log('RUBROS: ', this.rubros);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToDetalle(data: Beneficio) {
    this.router.navigate(['/menu/beneficios/detalle-beneficio', data.id]);
  }

  filterList(evt) {
    const searchTerm = evt.srcElement.value;
    if (!searchTerm) {
      this.beneficios = this.beneficiosOriginal;
    }

    if (searchTerm.length > 0) {
      this.beneficios = this.beneficiosOriginal.filter((beneficio) => {
        if (beneficio.nombre) {
          if (
            beneficio.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) >
            -1
          ) {
            return true;
          }
          return false;
        }
      });
    }
  }

  selectedRubro(item: Rubro) {
    if (item.id === this.rubroSeleccionado?.id) {
      this.rubroSeleccionado = null;
      this.beneficios = this.beneficiosOriginal;
    } else {
      this.rubroSeleccionado = item;
      this.beneficios = this.beneficiosOriginal.filter(
        (data) => data.rubroId === this.rubroSeleccionado.id
      );
    }
  }

  selectedTodos(item) {
    if (this.rubroSeleccionado) {
      if (item.id === this.rubroSeleccionado?.id) {
        this.rubroSeleccionado = null;
        this.beneficios = this.beneficiosOriginal;
      } else {
        this.rubroSeleccionado = item;
        this.beneficios = this.beneficiosOriginal;
      }
    } else {
      this.rubroSeleccionado = item;
      this.beneficios = this.beneficiosOriginal;
    }
  }
}
