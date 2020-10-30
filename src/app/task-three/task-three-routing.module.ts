import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskThreeComponent } from './task-three.component';

const routes: Routes = [{ path: '', component: TaskThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskThreeRoutingModule { }
