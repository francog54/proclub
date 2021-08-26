import { HeaderComponent } from './../../../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoIngresosPageRoutingModule } from './listado-ingresos-routing.module';

import { ListadoIngresosPage } from './listado-ingresos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoIngresosPageRoutingModule
  ],
  declarations: [ListadoIngresosPage, HeaderComponent]
})
export class ListadoIngresosPageModule {}
