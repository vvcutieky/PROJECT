import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPage } from './about.page';

const routes: Routes = [
  {
    path: '',
    component: AboutPage
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'deans',
    loadChildren: () => import('./deans/deans/deans.module').then( m => m.DeansPageModule)
  },
  {
    path: 'chairpersons',
    loadChildren: () => import('./chairpersons/chairpersons/chairpersons.module').then( m => m.ChairpersonsPageModule)
  },
  {
    path: 'instructors',
    loadChildren: () => import('./instructors/instructors/instructors.module').then( m => m.InstructorsPageModule)
  },
  {
    path: 'counselors',
    loadChildren: () => import('./counselors/counselors/counselors.module').then( m => m.CounselorsPageModule)
  },
  {
    path: 'organizations',
    loadChildren: () => import('./organizations/organizations/organizations.module').then( m => m.OrganizationsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutPageRoutingModule {}
