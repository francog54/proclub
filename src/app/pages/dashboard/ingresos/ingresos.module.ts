import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresosPageRoutingModule } from './ingresos-routing.module';

import { IngresosPage } from './ingresos.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresosPageRoutingModule
  ],
  declarations: [
    IngresosPage,
    HeaderComponent
  ]
})
export class IngresosPageModule {}
