import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChairpersonsPage } from './chairpersons.page';

const routes: Routes = [
  {
    path: '',
    component: ChairpersonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChairpersonsPageRoutingModule {}
