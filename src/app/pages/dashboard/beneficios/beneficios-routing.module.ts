import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficiosPage } from './beneficios.page';

const routes: Routes = [
  {
    path: '',
    component: BeneficiosPage
  },
  {
    path: 'detalle-beneficio/:idBeneficio',
    loadChildren: () => import('./detalle-beneficio/detalle-beneficio.module').then( m => m.DetalleBeneficioPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiosPageRoutingModule {}
