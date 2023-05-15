import { Component } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredients: Ingredient[] = [
  new Ingredient('Egg', 5),
  new Ingredient('Tomatos', 3),
  new Ingredient('Flower', 1),
  new Ingredient('Milk', .5)
];
}
