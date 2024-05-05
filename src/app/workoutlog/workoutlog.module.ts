import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutlogPageRoutingModule } from './workoutlog-routing.module';

import { WorkoutlogPage } from './workoutlog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutlogPageRoutingModule
  ],
  declarations: [WorkoutlogPage]
})
export class WorkoutlogPageModule {}
