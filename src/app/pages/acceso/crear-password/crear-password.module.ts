import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearPasswordPageRoutingModule } from './crear-password-routing.module';

import { CrearPasswordPage } from './crear-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPasswordPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearPasswordPage]
})
export class CrearPasswordPageModule {}
