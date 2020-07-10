import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcommercemapPageRoutingModule } from './ecommercemap-routing.module';

import { EcommercemapPage } from './ecommercemap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcommercemapPageRoutingModule
  ],
  declarations: [EcommercemapPage]
})
export class EcommercemapPageModule {}
