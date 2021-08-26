import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajeVerificacionPageRoutingModule } from './mensaje-verificacion-routing.module';

import { MensajeVerificacionPage } from './mensaje-verificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajeVerificacionPageRoutingModule
  ],
  declarations: [MensajeVerificacionPage]
})
export class MensajeVerificacionPageModule {}
