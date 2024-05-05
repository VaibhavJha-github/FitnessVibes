import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { IonicStorageModule } from '@ionic/storage-angular';


@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.scss'],
})


export class WelcomeModalComponent  implements OnInit {
  name: string = '';



  constructor(private modalController: ModalController, private storage: Storage) { }

  async ngOnInit() {
    this.name = (await this.storage.get('name')) || '';
  }

  closeModal() {
    this.modalController.dismiss();
  }

  

  
}










 