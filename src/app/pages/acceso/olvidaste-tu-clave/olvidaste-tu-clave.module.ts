import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidasteTuClavePageRoutingModule } from './olvidaste-tu-clave-routing.module';

import { OlvidasteTuClavePage } from './olvidaste-tu-clave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidasteTuClavePageRoutingModule
  ],
  declarations: [OlvidasteTuClavePage]
})
export class OlvidasteTuClavePageModule {}
