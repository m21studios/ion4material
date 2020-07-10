import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcommerceconfigPage } from './ecommerceconfig.page';

const routes: Routes = [
  {
    path: '',
    component: EcommerceconfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommerceconfigPageRoutingModule {}
