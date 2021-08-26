import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinatariosPage } from './destinatarios.page';

const routes: Routes = [
  {
    path: '',
    component: DestinatariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinatariosPageRoutingModule {}
