import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearNotificacionesPageRoutingModule } from './crear-notificaciones-routing.module';

import { CrearNotificacionesPage } from './crear-notificaciones.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearNotificacionesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CrearNotificacionesPage,
    HeaderComponent
  ]
})
export class CrearNotificacionesPageModule { }
