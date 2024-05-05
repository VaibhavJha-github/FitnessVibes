import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../storage.service';
//import { File } from '@ionic-native/file/ngx';
//import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string = '';
  age: string = '';
  gender: string = '';
  number: string = '';
  gmail: string = '';
  password: string = '';
  showNotifications: boolean = false;
  reminder: string = '';
  showPassword: boolean = false;
  selectedImages: string[] = [];
  imageFile: any; 

  constructor(private storage: Storage,  private router: Router) {}


  
  // the component is set up with initial values and data retrieved from storage.
  async ngOnInit() {
    await this.storage.create();
    this.name = await this.storage.get('name') || '';
    this.age = await this.storage.get('age') || '';
    this.gender = await this.storage.get('gender') || '';
    this.number = await this.storage.get('number') || '';
    this.gmail = await this.storage.get('gmail') || '';
    this.password = await this.storage.get('password') || '';
    this.showNotifications = await this.storage.get('showNotifications') || false;
    this.reminder = await this.storage.get('reminder') || '';
    this.selectedImages = (await this.storage.get('selectedImages')) || [];
    this.imageFile = await this.storage.get('selectedImage') || '';
  }
//Function is responsible for saving the component's property values to storage.
  async saveValues() {
    await this.storage.set('name', this.name);
    await this.storage.set('age', this.age);
    await this.storage.set('gender', this.gender);
    await this.storage.set('number', this.number);
    await this.storage.set('gmail', this.gmail);
    await this.storage.set('password', this.password);
    await this.storage.set('showNotifications', this.showNotifications);
    await this.storage.set('reminder', this.reminder);
    await this.storage.set('selectedImage', this.imageFile);

  }
//Handles the selection of an image file
  imageSelected(files: any) {
    if (files.length > 0) { //Checks if atleast 1 file selected
      let fileReader = new FileReader(); //Defines an onload event handler for the FileReader
      fileReader.onload = (e) => { //Assigns the result of the file reading operation (fileReader.result) to the imageFile
        this.imageFile = fileReader.result; //Assigns the result of the file reading operation
        this.saveValues(); // Save the image to storage after selection
        alert('imageSelected: ' + files[0].name); //Displays alert message indicating name of selected image file.
      };
      fileReader.readAsDataURL(files[0]); //Starts reading the data of the selected file as a data URL
    }
  }

  getTime(): number {
    return new Date().getTime(); //returns the current time as the number of milliseconds elapsed
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; //If true it becomes false, vice versa
  }

  onSignup() {
    this.saveValues();
    this.navigate();
  }

  navigate() {
    this.router.navigate(['/tabs/tab3']);
  }

  login() {
    this.router.navigate(['login']);
  }
}