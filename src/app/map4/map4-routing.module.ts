import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Map4Page } from './map4.page';

const routes: Routes = [
  {
    path: '',
    component: Map4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Map4PageRoutingModule {}
