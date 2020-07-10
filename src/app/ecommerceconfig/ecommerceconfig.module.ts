import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcommerceconfigPageRoutingModule } from './ecommerceconfig-routing.module';

import { EcommerceconfigPage } from './ecommerceconfig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcommerceconfigPageRoutingModule
  ],
  declarations: [EcommerceconfigPage]
})
export class EcommerceconfigPageModule {}
