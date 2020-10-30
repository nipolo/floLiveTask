import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';

import { TaskThreeRoutingModule } from './task-three-routing.module';
import { TaskThreeComponent } from './task-three.component';

@NgModule({
  declarations: [TaskThreeComponent],
  imports: [CommonModule, TaskThreeRoutingModule, SharedModule],
})
export class TaskThreeModule {}
