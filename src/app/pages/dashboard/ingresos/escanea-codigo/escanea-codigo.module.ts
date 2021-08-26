import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscaneaCodigoRoutingModule } from './escanea-codigo-routing.module';

import { EscaneaCodigoPage } from './escanea-codigo.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscaneaCodigoRoutingModule
  ],
  declarations: [
    EscaneaCodigoPage,
    HeaderComponent
  ]
})
export class EscaneaCodigoPageModule {}
