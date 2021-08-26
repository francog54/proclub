import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprobadosPage } from './aprobados.page';

const routes: Routes = [
  {
    path: '',
    component: AprobadosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprobadosPageRoutingModule {}
