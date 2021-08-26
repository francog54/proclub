import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPasswordPage } from './crear-password.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPasswordPageRoutingModule {}
