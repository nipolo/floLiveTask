import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';
import { TaskTwoRoutingModule } from './task-two-routing.module';
import { TaskTwoComponent } from './task-two.component';

@NgModule({
  declarations: [TaskTwoComponent],
  imports: [CommonModule, SharedModule, TaskTwoRoutingModule],
})
export class TaskTwoModule {}
