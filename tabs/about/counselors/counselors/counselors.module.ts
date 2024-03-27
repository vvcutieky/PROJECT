import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CounselorsPageRoutingModule } from './counselors-routing.module';

import { CounselorsPage } from './counselors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CounselorsPageRoutingModule
  ],
  declarations: [CounselorsPage]
})
export class CounselorsPageModule {}
