import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmadoPageRoutingModule } from './confirmado-routing.module';

import { ConfirmadoPage } from './confirmado.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmadoPageRoutingModule
  ],
  declarations: [
    ConfirmadoPage,
    HeaderComponent
  ]
})
export class ConfirmadoPageModule {}
