import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioAccesoGuard } from './guards/usuario-acceso.guard';
import { isLoggedGuard } from './guards/usuario-logged.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [UsuarioAccesoGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('./pages/dashboard/menu/menu.module').then(
            (m) => m.MenuPageModule
          ),
      }
    ],
  },
  {
    path: 'cuenta-no-verificada',
    canActivate: [isLoggedGuard],
    loadChildren: () =>
      import(
        './pages/dashboard/cuenta-no-verificada/cuenta-no-verificada.module'
      ).then((m) => m.CuentaNoVerificadaPageModule),
  },
  {
    path: 'mensaje-verificacion',
    canActivate: [isLoggedGuard],
    loadChildren: () =>
      import(
        './pages/dashboard/mensaje-verificacion/mensaje-verificacion.module'
      ).then((m) => m.MensajeVerificacionPageModule),
  },
  {
    path: 'splash',
    canActivate: [isLoggedGuard],
    loadChildren: () =>
      import('./splash/splash.module').then((m) => m.SplashPageModule),
  },
  {
    path: 'login',
    canActivate: [isLoggedGuard],
    loadChildren: () =>
      import('./pages/acceso/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
