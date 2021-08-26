import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinAprobarPageRoutingModule } from './sinaprobar-routing.module';

import { SinAprobarPage } from './sinaprobar.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinAprobarPageRoutingModule
  ],
  declarations: [
    SinAprobarPage,
    HeaderComponent
  ]
})
export class SinAprobarPageModule {}
