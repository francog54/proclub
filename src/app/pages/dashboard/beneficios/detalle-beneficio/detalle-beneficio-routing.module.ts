import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleBeneficioPage } from './detalle-beneficio.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleBeneficioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleBeneficioPageRoutingModule {}
