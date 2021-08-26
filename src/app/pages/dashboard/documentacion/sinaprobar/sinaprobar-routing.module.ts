import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinAprobarPage } from './sinaprobar.page';

const routes: Routes = [
  {
    path: '',
    component: SinAprobarPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinAprobarPageRoutingModule {}
