import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeVerificacionPage } from './mensaje-verificacion.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeVerificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeVerificacionPageRoutingModule {}
