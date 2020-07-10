import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatconfigPage } from './chatconfig.page';

const routes: Routes = [
  {
    path: '',
    component: ChatconfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatconfigPageRoutingModule {}
