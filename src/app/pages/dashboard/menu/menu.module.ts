import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';
import { IonicSelectableModule } from 'ionic-selectable';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    IonicSelectableModule,
    ReactiveFormsModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
