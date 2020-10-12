import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoworkersPage } from './coworkers.page';

const routes: Routes = [
  {
    path: '',
    component: CoworkersPage
  },
  {
    path: ':coworkerId/current',
    redirectTo: ':coworkerId',
    pathMatch: 'full'
  },
  {
    path: ':coworkerId',
    loadChildren: () => import('./coworkers-detail/coworkers-detail.module').then( m => m.CoworkersDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoworkersPageRoutingModule {}
