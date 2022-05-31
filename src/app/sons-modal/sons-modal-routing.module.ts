import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SonsModalPage } from './sons-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SonsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SonsModalPageRoutingModule {}
