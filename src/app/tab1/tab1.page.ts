import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {Router} from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Storage } from '@ionic/storage-angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ComponentsModule } from '../components/components.module';
import { WelcomeModalComponent } from '../welcome-modal/welcome-modal.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  name: string = '';
  isChecked!: boolean;
  isChecked2!: boolean;
  isChecked3!: boolean;

  constructor(private modalController: ModalController, private storage: Storage) {}

  async ngOnInit() {
    this.loadCheckboxState();
    this.name = (await this.storage.get('name')) || '';
  }

  async loadCheckboxState() {
    await this.storage.create();
    this.isChecked = (await this.storage.get('checkboxState')) || false;
    this.isChecked2 = (await this.storage.get('checkboxState2')) || false;
    this.isChecked3 = (await this.storage.get('checkboxState3')) || false;
  }

  async saveCheckboxState() {
    await this.storage.create();
    await this.storage.set('checkboxState', this.isChecked);
    await this.storage.set('checkboxState2', this.isChecked2);
    await this.storage.set('checkboxState3', this.isChecked3);
  }

  async openWelcomeModal() {
    const modal = await this.modalController.create({
      component: WelcomeModalComponent,
      backdropDismiss: false, // Prevent closing the modal by clicking outside
    });
    await modal.present();
  }
//Opens the modal when user first enters the application home page
  ionViewDidEnter() {
    this.openWelcomeModal();
  }
}
