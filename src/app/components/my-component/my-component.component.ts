import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

interface Meal {
  food: string;
  calories: number;
  fat: number;
}

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
})
export class MyComponentComponent {
  weekDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  mealPlan: { [day: string]: Meal[] } = {};

 //generates a shopping list based on the mealPlan object which shows meals per day, and collects 
 //fooditems into shoppinglist array, and logs to shopping list array to console.
  generateShoppingList() {
    const shoppingList: string[] = [];
    Object.values(this.mealPlan).forEach((meals) => {
      meals.forEach((meal) => {
        shoppingList.push(meal.food);
      });
    });
    console.log('Shopping List:', shoppingList);
  }

//adds new recipe to the mealPlan object based on the provided parameters
  addRecipe(day: string, food: string, calories: string, fat: string) {
    const meal: Meal = {
      food: food,
      calories: parseInt(calories),
      fat: parseInt(fat),
    };

    if (!this.mealPlan[day]) {
      this.mealPlan[day] = [];
    }
    this.mealPlan[day].push(meal);

    this.saveMealPlan();
  }
// removes specific recipe from mealPLan based on day & meal.
  removeRecipe(day: string, meal: Meal) {
    if (this.mealPlan[day]) {
      const index = this.mealPlan[day].indexOf(meal); //retrieves the index of the meal
      if (index !== -1) { // checks if meal is found in array
        this.mealPlan[day].splice(index, 1); //uses splice to remove meal form array (its index (index) and number of elements to remove (1))
        this.saveMealPlan();
      }
    }
  }

  constructor(private storage: Storage) {
    this.initStorage();
  }

  private async initStorage() {
    await this.storage.create();
    await this.loadMealPlan();
  }

  private async loadMealPlan() {
    this.mealPlan = await this.storage.get('mealPlan') || {};
  }

  private async saveMealPlan() {
    await this.storage.set('mealPlan', this.mealPlan);
  }
}
