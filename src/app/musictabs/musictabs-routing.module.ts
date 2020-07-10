import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusictabsPage } from './musictabs.page';


const routes: Routes = [
  {
    path: '',
    component: MusictabsPage,  
    children: [
      {
        path: 'music',  
        children:[
          {
            path:'',
            loadChildren: '../music/music.module#MusicPageModule' 
          }
        ]     
      },
      {
        path: 'albums',  
        children:[
          {
            path:'',
            loadChildren: '../albums/albums.module#AlbumsPageModule'
          }
        ]
      },
      {
        path: 'playlist',
        children:[
          {
            path:'',
            loadChildren: '../playlist/playlist.module#PlaylistPageModule'
          }
        ]
      },
      {
        path: 'options',
        children:[
          {
            path:'',
            loadChildren: '../options/options.module#OptionsPageModule'
          }
        ] 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusictabsPageRoutingModule {}
