import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})

export class Tab2Page {
  username= "";

  constructor(private modalController: ModalController, private router: Router) {}

  // Defining the navigate() method which is triggered when the user clicks on the button
  navigate() {
    this.router.navigate(['personal']);
  }

  // Defining the navigate1() method which is triggered when the user clicks on the button
  navigate1() {
    this.router.navigate(['workoutlog']);
  }

  // Defining the navigate2() method which is triggered when the user clicks on the button
  navigate2() {
    this.router.navigate(['map']);
  }

  // Defining the navigate3() method which is triggered when the user clicks on the button
  navigate3() {
    this.router.navigate(['chart']);
  }

  // Defining the navigate3() method which is triggered when the user clicks on the button
  navigate4() {
    this.router.navigate(['chart']);
  }
  // An asynchronous operation is performed to create and present a modal.
  async presentModal() {
    const modal = await this.modalController.create({
    component: ModalPage,
    componentProps: { username: this.username }
    });

    modal.onDidDismiss()
    .then((data) => {
    this.username = data.data;
    });

  return modal.present();
  
  }
}