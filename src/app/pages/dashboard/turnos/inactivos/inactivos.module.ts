import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InactivosPageRoutingModule } from './inactivos-routing.module';

import { InactivosPage } from './inactivos.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InactivosPageRoutingModule
  ],
  declarations: [
    InactivosPage,
    HeaderComponent
  ]
})
export class InactivosPageModule {}
