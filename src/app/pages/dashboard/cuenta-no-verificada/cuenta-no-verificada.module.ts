import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaNoVerificadaPageRoutingModule } from './cuenta-no-verificada-routing.module';

import { CuentaNoVerificadaPage } from './cuenta-no-verificada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaNoVerificadaPageRoutingModule
  ],
  declarations: [CuentaNoVerificadaPage]
})
export class CuentaNoVerificadaPageModule {}
