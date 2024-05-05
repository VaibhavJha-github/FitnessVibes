import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Storage } from '@ionic/storage-angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private modalController: ModalController, private storage: Storage, private platform: Platform) {
    this.initializeSettings();
   // this.initializeApp();
  }

  async initializeSettings() {
    // Store initial values for settings if they don't already exist
    const name = await this.storage.get('name');
    if (!name) {
      await this.storage.set('name', 'John Doe');
    }
    
    const number = await this.storage.get('number');
    if (!number) {
      await this.storage.set('number', '+61 449 343 123');
    }

    const showNotifications = await this.storage.get('showNotifications');
    if (showNotifications === null) {
      await this.storage.set('showNotifications', true);
    }
  
    const reminder = await this.storage.get('reminder');
    if (!reminder) {
      const defaultReminder = new Date();
      defaultReminder.setHours(9);
      defaultReminder.setMinutes(0);
      await this.storage.set('reminder', defaultReminder.toISOString());
    }
    
  }

  //initializeApp() {
  //  this.platform.ready().then(() => {
  //    // Hide the splash screen after the specified delay
  //    if (window['SplashScreen']) {
  //      setTimeout(() => {
  //        window['SplashScreen'].hide();
  //      }, 3000);
  //    }
 //   });
  //}
  

  
  }
