import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
@Output() RecipeEvent = new EventEmitter<Recipe>();
Recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'A Simple Description', 'https://img.taste.com.au/mOx3fOxf/w720-h480-cfill-q80/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg'),
  new Recipe('Pizza', 'This description for pizza', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHs0yVWxEWiTLnwy4Ndg-XMi3uZVJ4fLu7ng&usqp=CAU'),
  new Recipe('Chinese Food', 'Seafood description','https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg')
];
onSelectedRecipe(recipe: Recipe){
  console.log("Recieve Recipe From Item Component");
  this.RecipeEvent.emit(recipe);
  console.log(recipe);
}
}
