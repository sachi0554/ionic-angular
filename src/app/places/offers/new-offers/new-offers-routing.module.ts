import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewOffersPage } from './new-offers.page';

const routes: Routes = [
  {
    path: '',
    component: NewOffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewOffersPageRoutingModule {}
