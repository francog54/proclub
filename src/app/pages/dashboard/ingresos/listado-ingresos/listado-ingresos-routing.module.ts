import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoIngresosPage } from './listado-ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoIngresosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoIngresosPageRoutingModule {}
