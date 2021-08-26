import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginVerificadoPageRoutingModule } from './login-verificado-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginVerificadoPage } from './login-verificado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginVerificadoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginVerificadoPage]
})
export class LoginVerificadoPageModule {}
