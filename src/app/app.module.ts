import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalPageModule } from './modal/modal.module';
//import { WaterIntakeTrackerComponent } from 'src/app/water-intake-tracker/water-intake-tracker.component'; 
import { FormsModule } from '@angular/forms';
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';

@NgModule({
  declarations: [AppComponent, WelcomeModalComponent],

  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), ModalPageModule, FormsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
