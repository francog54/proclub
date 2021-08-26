import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscaneaCodigoPage } from './escanea-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: EscaneaCodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscaneaCodigoRoutingModule {}
