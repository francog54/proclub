import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeneficiosPageRoutingModule } from './beneficios-routing.module';

import { BeneficiosPage } from './beneficios.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeneficiosPageRoutingModule
  ],
  declarations: [
    BeneficiosPage,
    HeaderComponent
  ]
})
export class BeneficiosPageModule {}
