import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Accountrecover3Page } from './accountrecover3.page';

const routes: Routes = [
  {
    path: '',
    component: Accountrecover3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Accountrecover3PageRoutingModule {}
