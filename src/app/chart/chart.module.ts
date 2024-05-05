import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ChartPage } from './chart.page';
import { ChartPageRoutingModule } from './chart-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartPageRoutingModule
  ],
  declarations: [ChartPage]
})
export class ChartPageModule { }
