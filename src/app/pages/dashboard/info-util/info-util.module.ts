import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoUtilPageRoutingModule } from './info-util-routing.module';

import { InfoUtilPage } from './info-util.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoUtilPageRoutingModule
  ],
  declarations: [
    InfoUtilPage,
    HeaderComponent
  ]
})
export class InfoUtilPageModule {}
