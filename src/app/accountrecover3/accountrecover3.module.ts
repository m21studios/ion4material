import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Accountrecover3PageRoutingModule } from './accountrecover3-routing.module';

import { Accountrecover3Page } from './accountrecover3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Accountrecover3PageRoutingModule
  ],
  declarations: [Accountrecover3Page]
})
export class Accountrecover3PageModule {}
