import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
  
})
export class Tab3Page {
  name: string = '';
  age: string = '';
  gender: string = '';
  number: string = '';
  gmail: string = '';
  password: string = '';
  showNotifications: boolean = false;
  reminder: string = '';
  imageFile: any; 
//counter= 0;

constructor(private storage: Storage, private router: Router) {}


  async ngOnInit() {
    // initialize storage
    await this.storage.create();
    // retrieve saved values from storage
    this.name = await this.storage.get('name') || '';
    this.age = await this.storage.get('age') || '';
    this.gender = await this.storage.get('gender') || '';
    this.number = await this.storage.get('number') || '';
    this.gmail = await this.storage.get('gmail') || '';
     //retrieves saved notification toggle key from storage, if no input then defaults to false (line 12)
    this.showNotifications = await this.storage.get('showNotifications') || false;
       //retrieves saved values from calander date/time key from storage, if any
    this.reminder = await this.storage.get('reminder') || '';
    this.imageFile = await this.storage.get('selectedImage') || '';
  }

  async saveValues() {
    // save values to storage
    await this.storage.set('name', this.name);
    await this.storage.set('age', this.age);
    await this.storage.set('gender', this.gender);
    await this.storage.set('number', this.number);
    await this.storage.set('gmail', this.gmail);
    await this.storage.set('showNotifications', this.showNotifications);
    await this.storage.set('reminder', this.reminder);
  }

  //incrementCounter() {
   // this.counter++;
  //}
  
  onSignup(){
    this.saveValues();
    this.navigate();
  }
  navigate(){
    this.router.navigate(['signup']);
  }

 

}
