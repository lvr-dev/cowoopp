import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoworkersPageRoutingModule } from './coworkers-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CoworkersPage } from './coworkers.page';
import { CoworkerItemComponent } from './coworker-item/coworker-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoworkersPageRoutingModule,
    SharedModule
  ],
  declarations: [
      CoworkersPage,
      CoworkerItemComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class CoworkersPageModule {}
