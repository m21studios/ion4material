import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcommercelistPage } from './ecommercelist.page';

const routes: Routes = [
  {
    path: '',
    component: EcommercelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommercelistPageRoutingModule {}
