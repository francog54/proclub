import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioNoRegistradoPage } from './usuario-no-registrado.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioNoRegistradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioNoRegistradoPageRoutingModule {}
