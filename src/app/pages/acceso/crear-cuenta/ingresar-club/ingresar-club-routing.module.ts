import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarClubPage } from './ingresar-club.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarClubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarClubPageRoutingModule {}
