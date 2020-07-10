import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Accountrecover2PageRoutingModule } from './accountrecover2-routing.module';

import { Accountrecover2Page } from './accountrecover2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Accountrecover2PageRoutingModule
  ],
  declarations: [Accountrecover2Page]
})
export class Accountrecover2PageModule {}
