import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEncuestaPageRoutingModule } from './crear-encuesta-routing.module';

import { CrearEncuestaPage } from './crear-encuesta.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearEncuestaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CrearEncuestaPage,
    HeaderComponent
  ]
})
export class CrearEncuestaPageModule { }
