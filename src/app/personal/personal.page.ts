import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-personal',
  templateUrl: 'personal.page.html',
  styleUrls: ['personal.page.scss'],
})

export class PersonalPage {
  workouts = [
    { name: 'Bench press', pr: '120 kgs', reps: '12/3' },
    { name: 'Squats', pr: '160 kgs', reps: '8/3' },
    { name: 'Hammer curls', pr: '15 kgs', reps: '8/3' }
  ];

  constructor(private storage: Storage, private modalController: ModalController) {
    // Initialize workouts from storage
    this.storage.get('workouts').then((val) => {
      this.workouts = val || this.workouts; //assigns value to val if truth(not null), otherwise assigns value of this.workout to itself
    });
  }
  //An asynchronous function that opens a modal using the ModalController
  async openEditModal(index: number) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        workout: this.workouts[index]
      }
    });
  // Handles the dismissal of the modal and retrieve the edited workout data
    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        const editedWorkout = data.data;
        this.workouts[index] = editedWorkout;
        this.storage.set('workouts', this.workouts);
      }
    });

    return await modal.present();
  }
  //opens a modal for adding a new workout
  async openAddModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
//sets up an event listener using the onDidDismiss() which listens for the dismissal 
//of the modal and handles the data returned from the modal.
    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        const newWorkout = data.data;
        this.workouts.push(newWorkout);
        this.storage.set('workouts', this.workouts);
      }
    });

    return await modal.present();
  }
//Displays a confirmation dialog asking the user to confirm the deletion. 
//If confirmed, specific index removed from array using splice method
  deleteWorkout(index: number) {
    if (confirm('Delete ' + this.workouts[index].name + '?')) {
      this.workouts.splice(index, 1);
      this.storage.set('workouts', this.workouts);
    }
  }
}