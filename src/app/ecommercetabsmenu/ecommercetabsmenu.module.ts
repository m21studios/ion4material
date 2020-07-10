import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcommercetabsmenuPageRoutingModule } from './ecommercetabsmenu-routing.module';

import { EcommercetabsmenuPage } from './ecommercetabsmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcommercetabsmenuPageRoutingModule
  ],
  declarations: [EcommercetabsmenuPage]
})
export class EcommercetabsmenuPageModule {}
