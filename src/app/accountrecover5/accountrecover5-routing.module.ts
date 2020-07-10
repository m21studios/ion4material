import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Accountrecover5Page } from './accountrecover5.page';

const routes: Routes = [
  {
    path: '',
    component: Accountrecover5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Accountrecover5PageRoutingModule {}
