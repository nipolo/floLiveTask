import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskOneRoutingModule } from './task-one-routing.module';

import { TaskOneComponent } from './task-one.component';
import { CustomerDetailsContainerComponent } from './customer-details-container';
import { AccountDetailsContainerComponent } from './account-details-container';

@NgModule({
  declarations: [
    TaskOneComponent,
    CustomerDetailsContainerComponent,
    AccountDetailsContainerComponent,
  ],
  imports: [CommonModule, TaskOneRoutingModule],
})
export class TaskOneModule {}
