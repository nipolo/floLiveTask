import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'task1',
    loadChildren: () =>
      import('./task-one/task-one.module').then((m) => m.TaskOneModule),
  },
  { path: 'task2', loadChildren: () => import('./task-two/task-two.module').then(m => m.TaskTwoModule) },
  { path: 'task3', loadChildren: () => import('./task-three/task-three.module').then(m => m.TaskThreeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
