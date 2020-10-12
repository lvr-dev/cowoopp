import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';

import { CoworkersDetailPageRoutingModule } from './coworkers-detail-routing.module';

import { CoworkersDetailPage } from './coworkers-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoworkersDetailPageRoutingModule,
    SharedModule,
  ],
  declarations: [CoworkersDetailPage]
})
export class CoworkersDetailPageModule {}
