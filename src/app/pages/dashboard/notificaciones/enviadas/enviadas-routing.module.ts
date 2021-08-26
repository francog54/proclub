import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviadasPage } from './enviadas.page';

const routes: Routes = [
  {
    path: '',
    component: EnviadasPage,
    children: [
      {
        path: 'notificacion-enviada',
        children: [
          {
            path: '',
            loadChildren: () => import('../notificacion-enviada/notificacion-enviada-routing.module').then(m => m.NotificacionEnviadaPageRoutingModule)
          }
        ]
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviadasPageRoutingModule { }
