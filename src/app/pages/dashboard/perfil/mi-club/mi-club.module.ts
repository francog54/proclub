import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiClubPageRoutingModule } from './mi-club-routing.module';

import { MiClubPage } from './mi-club.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiClubPageRoutingModule
  ],
  declarations: [
    MiClubPage,
    HeaderComponent
  ]
})
export class MiClubPageModule {}
