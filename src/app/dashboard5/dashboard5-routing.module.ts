import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashboard5Page } from './dashboard5.page';

const routes: Routes = [
  {
    path: '',
    component: Dashboard5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dashboard5PageRoutingModule {}
