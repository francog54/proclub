import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashGenericoPageRoutingModule } from './splash-generico-routing.module';

import { SplashGenericoPage } from './splash-generico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashGenericoPageRoutingModule
  ],
  declarations: [SplashGenericoPage]
})
export class SplashGenericoPageModule {}
