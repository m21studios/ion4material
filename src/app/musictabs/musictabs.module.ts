import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusictabsPageRoutingModule } from './musictabs-routing.module';

import { MusictabsPage } from './musictabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusictabsPageRoutingModule
  ],
  declarations: [MusictabsPage]
})
export class MusictabsPageModule {}
