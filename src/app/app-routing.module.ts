import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'task1',
    loadChildren: () =>
      import('./task-one/task-one.module').then((m) => m.TaskOneModule),
  },
  { path: 'task2', loadChildren: () => import('./task-two/task-two.module').then(m => m.TaskTwoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
