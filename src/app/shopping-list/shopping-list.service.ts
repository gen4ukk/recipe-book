import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

constructor() { }

private ingredients: Ingredient[] = [
  new Ingredient('Apple', 5),
  new Ingredient('Tomato', 10),
];

GetIngredients(){
  return this.ingredients;
}

AddIngridient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
}

AddIngridients(ingredients: Ingredient[]){
  this.ingredients.push(...ingredients);
}

}
