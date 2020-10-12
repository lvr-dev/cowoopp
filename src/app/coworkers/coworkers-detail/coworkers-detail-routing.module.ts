import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoworkersDetailPage } from './coworkers-detail.page';
import { CurrentPositionComponent } from './current-position/current-position.component';

const routes: Routes = [
  {
    path: '',
    component: CoworkersDetailPage
  },
  {
    path: 'current',
    component: CurrentPositionComponent
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class CoworkersDetailPageRoutingModule {}
