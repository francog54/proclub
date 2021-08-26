import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurnosPageRoutingModule } from './turnos-routing.module';

import { TurnosPage } from './turnos.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurnosPageRoutingModule
  ],
  declarations: [
    TurnosPage,
    HeaderComponent
  ]
})
export class TurnosPageModule {}
