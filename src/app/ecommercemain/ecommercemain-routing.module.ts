import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcommercemainPage } from './ecommercemain.page';

const routes: Routes = [
  {
    path: '',
    component: EcommercemainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommercemainPageRoutingModule {}
