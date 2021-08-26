import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviarPageRoutingModule } from './enviar-routing.module';

import { EnviarPage } from './enviar.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    EnviarPage,
    HeaderComponent
  ]
})
export class EnviarPageModule { }
