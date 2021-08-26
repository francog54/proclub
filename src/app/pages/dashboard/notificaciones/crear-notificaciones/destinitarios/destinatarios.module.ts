import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinatariosPageRoutingModule } from './destinatarios-routing.module';

import { DestinatariosPage } from './destinatarios.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinatariosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    DestinatariosPage,
    HeaderComponent
  ]
})
export class DestinatariosPageModule { }
