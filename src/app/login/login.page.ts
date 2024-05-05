import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  gmail: string = '';
  password: string = '';
  showPassword: boolean = false; // Added showPassword property

  constructor(private storage: Storage, private router: Router) {}


async login() {
  // Retrieve stored values from Ionic Storage
  const storedGmail = await this.storage.get('gmail') || '';
  const storedPassword = await this.storage.get('password') || '';

  // Check if entered credentials match stored values
  if (this.gmail === storedGmail && this.password === storedPassword) {
    this.navigate(); // Navigate to desired page if credentials match
  } else {
    console.log('Wrong credentials'); // Display error message
  }
}

  

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  navigate() {
    this.router.navigate(['/tabs/tab3']);
  }

  signup() {
    this.router.navigate(['signup']);
  }
}
