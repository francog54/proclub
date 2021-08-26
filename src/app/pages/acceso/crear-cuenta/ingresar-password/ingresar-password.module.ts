import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarPasswordPageRoutingModule } from './ingresar-password-routing.module';

import { IngresarPasswordPage } from './ingresar-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarPasswordPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IngresarPasswordPage]
})
export class IngresarPasswordPageModule {}
