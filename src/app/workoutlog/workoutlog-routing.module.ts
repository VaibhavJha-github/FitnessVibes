import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutlogPage } from './workoutlog.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutlogPageRoutingModule {}
