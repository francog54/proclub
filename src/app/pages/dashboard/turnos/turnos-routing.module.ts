import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurnosPage } from './turnos.page';

const routes: Routes = [
  {
    path: '',
    component: TurnosPage,
    children: [
      {
        path: 'activos',
        children: [
          {
            path: '',
            loadChildren: () => import('../turnos/activos/activos.module').then( m => m.ActivosPageModule)
          }
        ]
      },
      {
        path: 'inactivos',
        children: [
          {
            path: '',
            loadChildren: () => import('../turnos/inactivos/inactivos.module').then( m => m.InactivosPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'activos',
        pathMatch: 'full'
      }
     
    ],
  },
  {
    path: 'sacar-turno/:id',
    loadChildren: () => import('./sacar-turno/sacar-turno.module').then( m => m.SacarTurnoPageModule)
  },
  {
    path: 'confirmado/:id',
    loadChildren: () => import('./confirmado/confirmado.module').then( m => m.ConfirmadoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurnosPageRoutingModule {}
