import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashGenericoPage } from './splash-generico.page';

const routes: Routes = [
  {
    path: '',
    component: SplashGenericoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashGenericoPageRoutingModule {}
