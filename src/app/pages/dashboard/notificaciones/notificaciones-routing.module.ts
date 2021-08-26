import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificacionesPage } from './notificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: NotificacionesPage,
    children: [
      {
        path: 'recibidas',
        children: [
          {
            path: '',
            loadChildren: () => import('./recibidas/recibidas.module').then(m => m.RecibidasPageModule)
          }
        ]
      },
      {
        path: 'enviadas',
        children: [
          {
            path: '',
            loadChildren: () => import('./enviadas/enviadas.module').then(m => m.EnviadasPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'recibidas',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: 'crear-notificaciones',
    loadChildren: () => import('./crear-notificaciones/crear-notificaciones.module').then(m => m.CrearNotificacionesPageModule)
  },
  {
    path: 'crear-encuesta',
    loadChildren: () => import('./encuestas/crear-encuesta/crear-encuesta.module').then(m => m.CrearEncuestaPageModule)
  },

  {
    path: 'destinatarios',
    loadChildren: () => import('./encuestas/destinitarios/destinatarios.module').then(m => m.DestinatariosPageModule)
  },

  {
    path: 'destinatarios-notificaciones',
    loadChildren: () => import('./crear-notificaciones/destinitarios/destinatarios.module').then(m => m.DestinatariosPageModule)
  },

  {
    path: 'enviar-notificaciones',
    loadChildren: () => import('./crear-notificaciones/enviar/enviar.module').then(m => m.EnviarPageModule)
  },

  {
    path: 'enviar',
    loadChildren: () => import('./encuestas/enviar/enviar.module').then(m => m.EnviarPageModule)
  },


  {
    path: 'preguntas',
    loadChildren: () => import('./encuestas/preguntas/preguntas.module').then(m => m.PreguntasPageModule)
  },  {
    path: 'notificacion-enviada',
    loadChildren: () => import('./notificacion-enviada/notificacion-enviada.module').then( m => m.NotificacionEnviadaPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificacionesPageRoutingModule { }

