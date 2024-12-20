import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinoPageRoutingModule } from './treino-routing.module';

import { TreinoPage } from './treino.page';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinoPageRoutingModule
  ],
  declarations: [TreinoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TreinoPageModule {}
