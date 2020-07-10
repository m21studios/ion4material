import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsettingsPageRoutingModule } from './chatsettings-routing.module';

import { ChatsettingsPage } from './chatsettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsettingsPageRoutingModule
  ],
  declarations: [ChatsettingsPage]
})
export class ChatsettingsPageModule {}
