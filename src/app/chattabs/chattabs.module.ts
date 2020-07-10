import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChattabsPageRoutingModule } from './chattabs-routing.module';

import { ChattabsPage } from './chattabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChattabsPageRoutingModule
  ],
  declarations: [ChattabsPage]
})
export class ChattabsPageModule {}
