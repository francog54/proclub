import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentacionPage } from './documentacion.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentacionPage,
    children: [
      {
        path: 'sinaprobar',
        children: [
          {
            path: '',
            loadChildren: () => import('../documentacion/sinaprobar/sinaprobar.module').then( m => m.SinAprobarPageModule)
          }
        ]
      },
      {
        path: 'aprobados',
        children: [
          {
            path: '',
            loadChildren: () => import('../documentacion/aprobados/aprobados.module').then( m => m.AprobadosPageModule)
          }
        ]
      },
     
     
    ],
  }
  ,
  {
    path: 'documentacion',
    loadChildren: () => import('../documentacion/documentacion/documentacion.module').then( m => m.DocumentacionPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentacionPageRoutingModule {}
