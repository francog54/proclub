import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresosPage } from './ingresos.page';

const routes: Routes = [
  {
    path: '',
    component: IngresosPage
  },

  {
    path: 'escanea-codigo/:idEspacio',
    loadChildren: () => import('../ingresos/escanea-codigo/escanea-codigo.module').then( m => m.EscaneaCodigoPageModule)
  },
  {
    path: 'listado-ingresos/:idEspacio',
    loadChildren: () => import('./listado-ingresos/listado-ingresos.module').then( m => m.ListadoIngresosPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresosPageRoutingModule {}
