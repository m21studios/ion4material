import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Accountrecover1PageRoutingModule } from './accountrecover1-routing.module';

import { Accountrecover1Page } from './accountrecover1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Accountrecover1PageRoutingModule
  ],
  declarations: [Accountrecover1Page]
})
export class Accountrecover1PageModule {}
