import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Accountrecover1Page } from './accountrecover1.page';

const routes: Routes = [
  {
    path: '',
    component: Accountrecover1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Accountrecover1PageRoutingModule {}
