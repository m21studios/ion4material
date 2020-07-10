import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dashboard3PageRoutingModule } from './dashboard3-routing.module';

import { Dashboard3Page } from './dashboard3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dashboard3PageRoutingModule
  ],
  declarations: [Dashboard3Page]
})
export class Dashboard3PageModule {}
