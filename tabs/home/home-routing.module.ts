import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'announcement',
    loadChildren: () => import('./announcement/announcement.module').then( m => m.AnnouncementPageModule)
  },
  {
    path: 'passers',
    loadChildren: () => import('./passers/passers.module').then( m => m.PassersPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
