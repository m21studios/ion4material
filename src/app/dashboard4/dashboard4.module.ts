import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dashboard4PageRoutingModule } from './dashboard4-routing.module';

import { Dashboard4Page } from './dashboard4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dashboard4PageRoutingModule
  ],
  declarations: [Dashboard4Page]
})
export class Dashboard4PageModule {}
