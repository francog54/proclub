import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviarPage } from './enviar.page';

const routes: Routes = [
  {
    path: '',
    component: EnviarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviarPageRoutingModule {}
