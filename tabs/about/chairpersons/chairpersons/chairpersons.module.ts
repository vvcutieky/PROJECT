import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChairpersonsPageRoutingModule } from './chairpersons-routing.module';

import { ChairpersonsPage } from './chairpersons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChairpersonsPageRoutingModule
  ],
  declarations: [ChairpersonsPage]
})
export class ChairpersonsPageModule {}
