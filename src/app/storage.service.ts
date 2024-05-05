import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

//Due to issues with an update of angular the latest version of @ionic/storage-angular would not work. 
//This may chnage in the comig days. As a work around if you install a beta version of the module it will work.
//npm install @ionic/storage-angular@4.0.0-next.4


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    //create storage.
     await this.storage.create();
    
  }

  // Create and expose methods that users of this service can call
 
  set(key: string, value: any) {
    this.storage?.set(key, value);
  }

  async get(key:string){
   return await this.storage?.get(key);
   
  }
  async remove(key:string){
    return await this.storage?.remove(key);
    
   }
}
