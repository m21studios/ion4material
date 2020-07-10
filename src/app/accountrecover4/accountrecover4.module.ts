import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Accountrecover4PageRoutingModule } from './accountrecover4-routing.module';

import { Accountrecover4Page } from './accountrecover4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Accountrecover4PageRoutingModule
  ],
  declarations: [Accountrecover4Page]
})
export class Accountrecover4PageModule {}
