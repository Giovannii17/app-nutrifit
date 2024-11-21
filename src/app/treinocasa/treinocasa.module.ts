import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinocasaPageRoutingModule } from './treinocasa-routing.module';

import { TreinocasaPage } from './treinocasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinocasaPageRoutingModule
  ],
  declarations: [TreinocasaPage]
})
export class TreinocasaPageModule {}
