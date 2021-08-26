import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: 'crear-password',
    loadChildren: () => import('../crear-password/crear-password.module').then( m => m.CrearPasswordPageModule)
  },
  {
    path: 'login-verificado',
    loadChildren: () => import('../login-verificado/login-verificado.module').then( m => m.LoginVerificadoPageModule)
  },
  {
    path: 'usuario-no-registrado',
    loadChildren: () => import('../usuario-no-registrado/usuario-no-registrado.module').then( m => m.UsuarioNoRegistradoPageModule)
  }, 
  {
    path: 'ingresar-cuenta',
    loadChildren: () => import('../crear-cuenta/ingresar-datos/ingresar-datos.module').then( m => m.IngresarDatosPageModule)
  }, {
    path: 'ingresar-password',
    loadChildren: () => import('../crear-cuenta/ingresar-password/ingresar-password.module').then( m => m.IngresarPasswordPageModule)
  },
  {
    path: 'ingresar-club',
    loadChildren: () => import('../crear-cuenta/ingresar-club/ingresar-club.module').then( m => m.IngresarClubPageModule)
  },
  {
    path: 'verificar-cuenta',
    loadChildren: () => import('../crear-cuenta/verificar-cuenta/verificar-cuenta.module').then( m => m.VerificarCuentaPageModule)
  },
  {
    path: 'olvidaste-tu-clave',
    loadChildren: () => import('../olvidaste-tu-clave/olvidaste-tu-clave.module').then( m => m.OlvidasteTuClavePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
