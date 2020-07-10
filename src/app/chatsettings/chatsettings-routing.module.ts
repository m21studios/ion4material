import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsettingsPage } from './chatsettings.page';

const routes: Routes = [
  {
    path: '',
    component: ChatsettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsettingsPageRoutingModule {}
