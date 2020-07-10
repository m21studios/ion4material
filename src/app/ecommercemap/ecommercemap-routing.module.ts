import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcommercemapPage } from './ecommercemap.page';

const routes: Routes = [
  {
    path: '',
    component: EcommercemapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommercemapPageRoutingModule {}
