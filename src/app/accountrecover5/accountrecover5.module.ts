import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Accountrecover5PageRoutingModule } from './accountrecover5-routing.module';

import { Accountrecover5Page } from './accountrecover5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Accountrecover5PageRoutingModule
  ],
  declarations: [Accountrecover5Page]
})
export class Accountrecover5PageModule {}
