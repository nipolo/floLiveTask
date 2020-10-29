import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDetailsContainerComponent } from './customer-details-container';
import { AccountDetailsContainerComponent } from './account-details-container';

import { TaskOneComponent } from './task-one.component';

const routes: Routes = [
  {
    path: '',
    component: TaskOneComponent,
    children: [
      {
        path: 'customer-details',
        component: CustomerDetailsContainerComponent,
      },
      {
        path: 'account-details',
        component: AccountDetailsContainerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskOneRoutingModule {}
