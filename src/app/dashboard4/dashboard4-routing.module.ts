import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashboard4Page } from './dashboard4.page';

const routes: Routes = [
  {
    path: '',
    component: Dashboard4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dashboard4PageRoutingModule {}
