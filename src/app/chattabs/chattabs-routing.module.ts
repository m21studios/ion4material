import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChattabsPage } from './chattabs.page';


const routes: Routes = [
  {
    path: '',
    component: ChattabsPage,  
    children: [
      {
        path: 'contacts',
        children:[{
          path:'',
          loadChildren: '../chat/chat.module#ChatPageModule'
        }]
      },
      {
        path: 'chats',
        children:[{
          path:'',
          loadChildren: '../chatlist/chatlist.module#ChatlistPageModule'
        }] 
      },
      {
        path: 'chatsettigns',
        children:[{
          path:'',
          loadChildren: '../chatconfig/chatconfig.module#ChatconfigPageModule'
        }]
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChattabsPageRoutingModule {}
