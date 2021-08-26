import { ToggleInicioComponent } from './../../../components/toggle-inicio/toggle-inicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { ToolbarInicioComponent } from 'src/app/components/toolbar-inicio/toolbar-inicio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule
  ],
  declarations: [InicioPage, ToolbarInicioComponent, ToggleInicioComponent]
})
export class InicioPageModule { }
