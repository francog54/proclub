import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarPasswordPage } from './ingresar-password.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarPasswordPageRoutingModule {}
