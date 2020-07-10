import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcommercelistPageRoutingModule } from './ecommercelist-routing.module';

import { EcommercelistPage } from './ecommercelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcommercelistPageRoutingModule
  ],
  declarations: [EcommercelistPage]
})
export class EcommercelistPageModule {}
