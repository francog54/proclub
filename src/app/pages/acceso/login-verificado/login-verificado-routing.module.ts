import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginVerificadoPage } from './login-verificado.page';

const routes: Routes = [
  {
    path: '',
    component: LoginVerificadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginVerificadoPageRoutingModule {}
