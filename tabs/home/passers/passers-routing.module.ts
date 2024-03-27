import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassersPage } from './passers.page';

const routes: Routes = [
  {
    path: '',
    component: PassersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassersPageRoutingModule {}
