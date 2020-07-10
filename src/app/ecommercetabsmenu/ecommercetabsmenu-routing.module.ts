import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcommercetabsmenuPage } from './ecommercetabsmenu.page';

const routes: Routes = [
  {
    path: '',
    component: EcommercetabsmenuPage,
    children: [
      {
        path: 'ecommercehome',
        children:[
          {
            path:'',
            loadChildren: '../ecommercemain/ecommercemain.module#EcommercemainPageModule'
          }
        ]
      },
      {
        path: 'ecommercelist',
        children:[{
          path:'',
          loadChildren: '../ecommercelist/ecommercelist.module#EcommercelistPageModule'
        }]
      },
      {
        path: 'map',
        children:[{
          path:'',
          loadChildren: '../ecommercemap/ecommercemap.module#EcommercemapPageModule'
        }]
      },
      {
        path: 'config',
        children:[{
          path:'',   
          loadChildren: '../ecommerceconfig/ecommerceconfig.module#EcommerceconfigPageModule'
        }] 
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommercetabsmenuPageRoutingModule {}
