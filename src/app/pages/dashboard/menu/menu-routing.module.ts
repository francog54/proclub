import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../inicio/inicio.module').then((m) => m.InicioPageModule),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('../perfil/perfil.module').then((m) => m.PerfilPageModule),
      },
      {
        path: 'info-util',
        loadChildren: () =>
          import('../info-util/info-util.module').then(
            (m) => m.InfoUtilPageModule
          ),
      },
      {
        path: 'beneficios',
        loadChildren: () =>
          import('../beneficios/beneficios.module').then(
            (m) => m.BeneficiosPageModule
          ),
      },
      {
        path: 'documentacion',
        loadChildren: () =>
          import('../documentacion/documentacion.module').then(
            (m) => m.DocumentacionPageModule
          ),
      },
      {
        path: 'ingresos',
        loadChildren: () =>
          import('../ingresos/ingresos.module').then(
            (m) => m.IngresosPageModule
          ),
      },
      {
        path: 'turnos',
        loadChildren: () =>
          import('../turnos/turnos.module').then((m) => m.TurnosPageModule),
      },
      {
        path: 'notificaciones',
        loadChildren: () =>
          import('../notificaciones/notificaciones.module').then(
            (m) => m.NotificacionesPageModule
          ),
      },
      {
        path: 'agregar-club',
        loadChildren: () =>
          import(
            '../../acceso/crear-cuenta/ingresar-club/ingresar-club.module'
          ).then((m) => m.IngresarClubPageModule),
      },
      {
        path: 'agregar-club/:idClub',
        loadChildren: () =>
          import(
            '../../acceso/crear-cuenta/ingresar-club/ingresar-club.module'
          ).then((m) => m.IngresarClubPageModule),
      },
      {
        path: 'splash-generico',
        loadChildren: () =>
          import(
            '../../../components/splash-generico/splash-generico.module'
          ).then((m) => m.SplashGenericoPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
