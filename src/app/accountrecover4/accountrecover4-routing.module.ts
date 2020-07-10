import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Accountrecover4Page } from './accountrecover4.page';

const routes: Routes = [
  {
    path: '',
    component: Accountrecover4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Accountrecover4PageRoutingModule {}
