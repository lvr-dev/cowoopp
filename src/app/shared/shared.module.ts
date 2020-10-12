import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DefaultValuePipe } from './pipes/default-value.pipe';

import { CowooHeaderComponent } from './components/cowoo-header/cowoo-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CowooHeaderComponent,
    DefaultValuePipe
  ],
  exports: [
    CowooHeaderComponent,
    DefaultValuePipe
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class SharedModule { }
