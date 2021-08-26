import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaNoVerificadaPage } from './cuenta-no-verificada.page';

const routes: Routes = [
  {
    path: '',
    component: CuentaNoVerificadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaNoVerificadaPageRoutingModule {}
