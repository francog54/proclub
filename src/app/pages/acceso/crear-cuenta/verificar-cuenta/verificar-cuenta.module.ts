import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificarCuentaPageRoutingModule } from './verificar-cuenta-routing.module';

import { VerificarCuentaPage } from './verificar-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificarCuentaPageRoutingModule
  ],
  declarations: [VerificarCuentaPage]
})
export class VerificarCuentaPageModule {}
