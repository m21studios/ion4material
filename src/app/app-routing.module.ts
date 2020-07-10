import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'register1',
    loadChildren: () => import('./register1/register1.module').then( m => m.Register1PageModule)
  },
  {
    path: 'register2',
    loadChildren: () => import('./register2/register2.module').then( m => m.Register2PageModule)
  },
  {
    path: 'register3',
    loadChildren: () => import('./register3/register3.module').then( m => m.Register3PageModule)
  },
  {
    path: 'register4',
    loadChildren: () => import('./register4/register4.module').then( m => m.Register4PageModule)
  },
  {
    path: 'register5',
    loadChildren: () => import('./register5/register5.module').then( m => m.Register5PageModule)
  },
  {
    path: 'login1',
    loadChildren: () => import('./login1/login1.module').then( m => m.Login1PageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'login3',
    loadChildren: () => import('./login3/login3.module').then( m => m.Login3PageModule)
  },
  {
    path: 'login4',
    loadChildren: () => import('./login4/login4.module').then( m => m.Login4PageModule)
  },
  {
    path: 'login5',
    loadChildren: () => import('./login5/login5.module').then( m => m.Login5PageModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then( m => m.TodoPageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./music/music.module').then( m => m.MusicPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'fileupload',
    loadChildren: () => import('./fileupload/fileupload.module').then( m => m.FileuploadPageModule)
  },
  {
    path: 'dashboard1',
    loadChildren: () => import('./dashboard1/dashboard1.module').then( m => m.Dashboard1PageModule)
  },
  {
    path: 'dashboard2',
    loadChildren: () => import('./dashboard2/dashboard2.module').then( m => m.Dashboard2PageModule)
  },
  {
    path: 'dashboard3',
    loadChildren: () => import('./dashboard3/dashboard3.module').then( m => m.Dashboard3PageModule)
  },
  {
    path: 'dashboard4',
    loadChildren: () => import('./dashboard4/dashboard4.module').then( m => m.Dashboard4PageModule)
  },
  {
    path: 'dashboard5',
    loadChildren: () => import('./dashboard5/dashboard5.module').then( m => m.Dashboard5PageModule)
  },
  {
    path: 'ecommercemain',
    loadChildren: () => import('./ecommercemain/ecommercemain.module').then( m => m.EcommercemainPageModule)
  },
  {
    path: 'ecommercelist',
    loadChildren: () => import('./ecommercelist/ecommercelist.module').then( m => m.EcommercelistPageModule)
  },
  {
    path: 'ecommercemap',
    loadChildren: () => import('./ecommercemap/ecommercemap.module').then( m => m.EcommercemapPageModule)
  },
  {
    path: 'ecommerceconfig',
    loadChildren: () => import('./ecommerceconfig/ecommerceconfig.module').then( m => m.EcommerceconfigPageModule)
  },
  {
    path: 'ecommercetabsmenu',
    loadChildren: () => import('./ecommercetabsmenu/ecommercetabsmenu.module').then( m => m.EcommercetabsmenuPageModule)
  },
  {
    path: 'accountrecover1',
    loadChildren: () => import('./accountrecover1/accountrecover1.module').then( m => m.Accountrecover1PageModule)
  },
  {
    path: 'accountrecover2',
    loadChildren: () => import('./accountrecover2/accountrecover2.module').then( m => m.Accountrecover2PageModule)
  },
  {
    path: 'accountrecover3',
    loadChildren: () => import('./accountrecover3/accountrecover3.module').then( m => m.Accountrecover3PageModule)
  },
  {
    path: 'accountrecover4',
    loadChildren: () => import('./accountrecover4/accountrecover4.module').then( m => m.Accountrecover4PageModule)
  },
  {
    path: 'accountrecover5',
    loadChildren: () => import('./accountrecover5/accountrecover5.module').then( m => m.Accountrecover5PageModule)
  },
  {
    path: 'chattabs',
    loadChildren: () => import('./chattabs/chattabs.module').then( m => m.ChattabsPageModule)
  },
  {
    path: 'chatlist',
    loadChildren: () => import('./chatlist/chatlist.module').then( m => m.ChatlistPageModule)
  },
  {
    path: 'custom',
    loadChildren: () => import('./custom/custom.module').then( m => m.CustomPageModule)
  },
  {
    path: 'musictabs',
    loadChildren: () => import('./musictabs/musictabs.module').then( m => m.MusictabsPageModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./albums/albums.module').then( m => m.AlbumsPageModule)
  },
  {
    path: 'playlist',
    loadChildren: () => import('./playlist/playlist.module').then( m => m.PlaylistPageModule)
  },
  {
    path: 'options',
    loadChildren: () => import('./options/options.module').then( m => m.OptionsPageModule)
  },
  {
    path: 'chatconfig',
    loadChildren: () => import('./chatconfig/chatconfig.module').then( m => m.ChatconfigPageModule)
  },
  {
    path: 'chatroom',
    loadChildren: () => import('./chatroom/chatroom.module').then( m => m.ChatroomPageModule)
  },
  {
    path: 'map1',
    loadChildren: () => import('./map1/map1.module').then( m => m.Map1PageModule)
  },
  {
    path: 'map2',
    loadChildren: () => import('./map2/map2.module').then( m => m.Map2PageModule)
  },
  {
    path: 'map3',
    loadChildren: () => import('./map3/map3.module').then( m => m.Map3PageModule)
  },
  {
    path: 'map4', 
    loadChildren: () => import('./map4/map4.module').then( m => m.Map4PageModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./charts/charts.module').then( m => m.ChartsPageModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesPageModule)
  },
  {
    path: 'tags',
    loadChildren: () => import('./tags/tags.module').then( m => m.TagsPageModule)
  },
  {
    path: 'contactlist',
    loadChildren: () => import('./contactlist/contactlist.module').then( m => m.ContactlistPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
