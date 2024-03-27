import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounselorsPage } from './counselors.page';

const routes: Routes = [
  {
    path: '',
    component: CounselorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounselorsPageRoutingModule {}
