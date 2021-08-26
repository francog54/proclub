import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionEnviadaPageRoutingModule } from './notificacion-enviada-routing.module';

import { NotificacionEnviadaPage } from './notificacion-enviada.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionEnviadaPageRoutingModule
  ],
  declarations: [
    NotificacionEnviadaPage,
    HeaderComponent
  ]
})
export class NotificacionEnviadaPageModule { }
