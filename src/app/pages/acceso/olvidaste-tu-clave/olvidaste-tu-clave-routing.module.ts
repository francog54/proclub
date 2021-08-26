import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidasteTuClavePage } from './olvidaste-tu-clave.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidasteTuClavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidasteTuClavePageRoutingModule {}
