import { Component, OnInit } from '@angular/core';
import { IonicModule, NavParams, ModalController } from '@ionic/angular';
import { Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ModalPageRoutingModule } from './modal-routing.module';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

//Used to input new values for personal record page, the inputed values are sotred, 
//and are called in the personal record page to show
export class ModalPage {
  workout: { name: string, pr: string, reps: string } = { name: '', pr: '', reps: '' };
  editedWorkout: { name: string, pr: string, reps: string };

  constructor(private modalController: ModalController) {
    this.editedWorkout = { name: '', pr: '', reps: '' };
  }

  ionViewWillEnter() {
    if (this.workout) {
      this.editedWorkout = { ...this.workout };
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  saveChanges() {
    this.modalController.dismiss(this.editedWorkout);
  }
}