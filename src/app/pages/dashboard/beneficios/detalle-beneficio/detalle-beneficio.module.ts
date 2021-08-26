import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleBeneficioPageRoutingModule } from './detalle-beneficio-routing.module';

import { DetalleBeneficioPage } from './detalle-beneficio.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleBeneficioPageRoutingModule,
  ],
  declarations: [DetalleBeneficioPage, HeaderComponent],
})
export class DetalleBeneficioPageModule {}
