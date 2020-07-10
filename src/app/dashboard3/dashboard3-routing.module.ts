import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashboard3Page } from './dashboard3.page';

const routes: Routes = [
  {
    path: '',
    component: Dashboard3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dashboard3PageRoutingModule {}
