import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoUtilPage } from './info-util.page';

const routes: Routes = [
  {
    path: '',
    component: InfoUtilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoUtilPageRoutingModule {}
