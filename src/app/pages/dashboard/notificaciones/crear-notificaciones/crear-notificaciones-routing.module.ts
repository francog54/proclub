import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearNotificacionesPage } from './crear-notificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: CrearNotificacionesPage
  },
  
  {
    path: 'destinatarios',
    loadChildren: () => import('./destinitarios/destinatarios.module').then( m => m.DestinatariosPageModule)
  },

  
  {
    path: 'enviar',
    loadChildren: () => import('./enviar/enviar.module').then( m => m.EnviarPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearNotificacionesPageRoutingModule {}
