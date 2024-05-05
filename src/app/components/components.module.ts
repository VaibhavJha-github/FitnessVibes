import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component/my-component.component'; // Import the component

@NgModule({
  declarations: [MyComponentComponent], // Add the component to the declarations array
  imports: [
    CommonModule
  ],
  exports: [MyComponentComponent] // Export the component
})
export class ComponentsModule { }
