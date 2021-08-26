import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarClubPageRoutingModule } from './ingresar-club-routing.module';

import { IngresarClubPage } from './ingresar-club.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarClubPageRoutingModule,
    ReactiveFormsModule,
    IonicSelectableModule
  ],
  declarations: [IngresarClubPage]
})
export class IngresarClubPageModule {}
