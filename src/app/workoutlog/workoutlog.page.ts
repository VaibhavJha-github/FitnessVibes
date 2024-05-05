import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IonicStorageModule } from '@ionic/storage-angular';

@Component({
  selector: 'app-workoutlog',
  templateUrl: './workoutlog.page.html',
  styleUrls: ['./workoutlog.page.scss'],
})
export class WorkoutlogPage implements OnInit {
  isChecked!: boolean;
  isChecked2!: boolean;
  isChecked3!: boolean;
  isChecked4!: boolean;
  isChecked5!: boolean;
  isChecked6!: boolean;
  isChecked7!: boolean;
  isChecked8!: boolean;
  isChecked9!: boolean;
  isChecked10!: boolean;
  isChecked11!: boolean;
  isChecked12!: boolean;
  isChecked13!: boolean;
  isChecked14!: boolean;
  isChecked15!: boolean;
  isChecked16!: boolean;
  isChecked17!: boolean;
  isChecked18!: boolean;
  isChecked19!: boolean;
  isChecked20!: boolean;
  isChecked21!: boolean;
  isChecked22!: boolean;
  isChecked23!: boolean;
  isChecked24!: boolean;
  isChecked25!: boolean;
  isChecked26!: boolean;
  isChecked27!: boolean;
  isChecked28!: boolean;
  isChecked29!: boolean;
  isChecked30!: boolean;
  isChecked31!: boolean;
  isChecked32!: boolean;
  isChecked33!: boolean;
  isChecked34!: boolean;
  isChecked35!: boolean;
 

  constructor(private storage: Storage) {}

  ngOnInit() {
    this.loadCheckboxState();
  }
  //Asynchronous method that loads the state of multiple checkboxes from storage.
  async loadCheckboxState() {
    await this.storage.create();
    this.isChecked = await this.storage.get('checkboxState') || false;
    this.isChecked2 = await this.storage.get('checkboxState2') || false;
    this.isChecked3 = await this.storage.get('checkboxState3') || false;
    this.isChecked4 = await this.storage.get('checkboxState4') || false;
    this.isChecked5 = await this.storage.get('checkboxState5') || false;
    this.isChecked6 = await this.storage.get('checkboxState6') || false;
    this.isChecked7 = await this.storage.get('checkboxState7') || false;
    this.isChecked8 = await this.storage.get('checkboxState8') || false;
    this.isChecked9 = await this.storage.get('checkboxState9') || false;
    this.isChecked10 = await this.storage.get('checkboxState10') || false;
    this.isChecked11 = await this.storage.get('checkboxState11') || false;
    this.isChecked12 = await this.storage.get('checkboxState12') || false;
    this.isChecked13 = await this.storage.get('checkboxState13') || false;
    this.isChecked14 = await this.storage.get('checkboxState14') || false;
    this.isChecked15 = await this.storage.get('checkboxState15') || false;
    this.isChecked16 = await this.storage.get('checkboxState16') || false;
    this.isChecked17 = await this.storage.get('checkboxState17') || false;
    this.isChecked18 = await this.storage.get('checkboxState18') || false;
    this.isChecked19 = await this.storage.get('checkboxState19') || false;
    this.isChecked20 = await this.storage.get('checkboxState20') || false;
    this.isChecked21 = await this.storage.get('checkboxState21') || false;
    this.isChecked22 = await this.storage.get('checkboxState22') || false;
    this.isChecked23 = await this.storage.get('checkboxState23') || false;
    this.isChecked24 = await this.storage.get('checkboxState24') || false;
    this.isChecked25 = await this.storage.get('checkboxState25') || false;
    this.isChecked26 = await this.storage.get('checkboxState26') || false;
    this.isChecked27 = await this.storage.get('checkboxState27') || false;
    this.isChecked28 = await this.storage.get('checkboxState28') || false;
    this.isChecked29 = await this.storage.get('checkboxState29') || false;
    this.isChecked30 = await this.storage.get('checkboxState30') || false;
    this.isChecked31 = await this.storage.get('checkboxState31') || false;
    this.isChecked32 = await this.storage.get('checkboxState32') || false;
    this.isChecked33 = await this.storage.get('checkboxState33') || false;
    this.isChecked34 = await this.storage.get('checkboxState34') || false;
    this.isChecked35 = await this.storage.get('checkboxState35') || false;
    
  }
//Asynchronous method that saves the state of multiple checkboxes to storage
  async saveCheckboxState() {
    await this.storage.create();
    await this.storage.set('checkboxState', this.isChecked);
    await this.storage.set('checkboxState2', this.isChecked2);
    await this.storage.set('checkboxState3', this.isChecked3);
    await this.storage.set('checkboxState4', this.isChecked4);
    await this.storage.set('checkboxState5', this.isChecked5);
    await this.storage.set('checkboxState6', this.isChecked6);
    await this.storage.set('checkboxState7', this.isChecked7);
    await this.storage.set('checkboxState8', this.isChecked8);
    await this.storage.set('checkboxState9', this.isChecked9);
    await this.storage.set('checkboxState10', this.isChecked10);
    await this.storage.set('checkboxState11', this.isChecked11);
    await this.storage.set('checkboxState12', this.isChecked12);
    await this.storage.set('checkboxState13', this.isChecked13);
    await this.storage.set('checkboxState14', this.isChecked14);
    await this.storage.set('checkboxState15', this.isChecked15);
    await this.storage.set('checkboxState16', this.isChecked16);
    await this.storage.set('checkboxState17', this.isChecked17);
    await this.storage.set('checkboxState18', this.isChecked18);
    await this.storage.set('checkboxState19', this.isChecked19);
    await this.storage.set('checkboxState20', this.isChecked20);
    await this.storage.set('checkboxState21', this.isChecked21);
    await this.storage.set('checkboxState22', this.isChecked22);
    await this.storage.set('checkboxState23', this.isChecked23);
    await this.storage.set('checkboxState24', this.isChecked24);
    await this.storage.set('checkboxState25', this.isChecked25);
    await this.storage.set('checkboxState26', this.isChecked26);
    await this.storage.set('checkboxState27', this.isChecked27);
    await this.storage.set('checkboxState28', this.isChecked28);
    await this.storage.set('checkboxState29', this.isChecked29);
    await this.storage.set('checkboxState30', this.isChecked30);
    await this.storage.set('checkboxState31', this.isChecked31);
    await this.storage.set('checkboxState32', this.isChecked32);
    await this.storage.set('checkboxState33', this.isChecked33);
    await this.storage.set('checkboxState34', this.isChecked34);
    await this.storage.set('checkboxState35', this.isChecked35);
   
  }
}

