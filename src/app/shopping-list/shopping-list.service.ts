import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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

ingredientEdit = new Subject<number>();

GetIngredients(){
  return this.ingredients;
}

GetIngredient(index: number){
  return this.ingredients[index];
}

AddIngridient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
}

AddIngridients(ingredients: Ingredient[]){
  this.ingredients.push(...ingredients);
}

UpdateIngedient(index: number, newIngredient: Ingredient){
  this.ingredients[index] = newIngredient;
}

DeleteIngredient(index: number){
  this.ingredients.splice(index, 1);
}

}