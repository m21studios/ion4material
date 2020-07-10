import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Map4PageRoutingModule } from './map4-routing.module';

import { Map4Page } from './map4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Map4PageRoutingModule
  ],
  declarations: [Map4Page]
})
export class Map4PageModule {}
