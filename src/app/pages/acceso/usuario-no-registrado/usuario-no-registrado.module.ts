import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioNoRegistradoPageRoutingModule } from './usuario-no-registrado-routing.module';

import { UsuarioNoRegistradoPage } from './usuario-no-registrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioNoRegistradoPageRoutingModule
  ],
  declarations: [UsuarioNoRegistradoPage]
})
export class UsuarioNoRegistradoPageModule {}
