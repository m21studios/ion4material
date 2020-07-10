import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcommercemainPageRoutingModule } from './ecommercemain-routing.module';

import { EcommercemainPage } from './ecommercemain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcommercemainPageRoutingModule
  ],
  declarations: [EcommercemainPage]
})
export class EcommercemainPageModule {}
