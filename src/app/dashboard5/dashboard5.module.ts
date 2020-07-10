import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dashboard5PageRoutingModule } from './dashboard5-routing.module';

import { Dashboard5Page } from './dashboard5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dashboard5PageRoutingModule
  ],
  declarations: [Dashboard5Page]
})
export class Dashboard5PageModule {}
