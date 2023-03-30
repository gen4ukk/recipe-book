import { Injectable } from '@angular/core';
import { Recipe } from './Recipe.model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

constructor(private store: Store<fromShoppingList.AppState>) { }

recipeChanged = new Subject<Recipe[]>();

private recipes : Recipe[] = [];

setRecipes(recipe: Recipe[]){
  this.recipes = recipe;
  this.recipeChanged.next(recipe);
}

getRecipes(){
  return this.recipes;
}

getRecipeById(index: number) {
  return this.recipes[index];
}

addIngredientsToShoppingList(recipe: Recipe){
  this.store.dispatch(new ShoppingListActions.AddIngredients(recipe.ingredients));
}

addRecipe(recipe: Recipe){
  this.recipes.push(recipe);
}

updateRecipe(index: number, recipe: Recipe){
  this.recipes[index] = recipe;
}

deleteRecipe(index: number){
  this.recipes.splice(index, 1);
}

}
