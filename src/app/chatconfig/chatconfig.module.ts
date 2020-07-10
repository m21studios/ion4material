import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatconfigPageRoutingModule } from './chatconfig-routing.module';

import { ChatconfigPage } from './chatconfig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatconfigPageRoutingModule
  ],
  declarations: [ChatconfigPage]
})
export class ChatconfigPageModule {}
