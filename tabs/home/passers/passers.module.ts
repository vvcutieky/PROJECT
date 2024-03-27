import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassersPageRoutingModule } from './passers-routing.module';

import { PassersPage } from './passers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassersPageRoutingModule
  ],
  declarations: [PassersPage]
})
export class PassersPageModule {}
