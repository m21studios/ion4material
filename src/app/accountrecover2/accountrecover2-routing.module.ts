import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Accountrecover2Page } from './accountrecover2.page';

const routes: Routes = [
  {
    path: '',
    component: Accountrecover2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Accountrecover2PageRoutingModule {}
