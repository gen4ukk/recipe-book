import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './Recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

constructor(private slService: ShoppingListService) { }

private recipes : Recipe[] = [
  new Recipe(
    'test recipe 1 fdfdfsfsdf',
    'test description dsfsdfsdfsdfsdfsdfsdf',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,300',
    [
     new Ingredient('Meat', 100),
     new Ingredient('Butter', 10),
    ]),
  new Recipe(
    'test recipe 2 fdsfsdfdsfsd',
    'test description sdfsdfsdfsdfsdfdsff',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,300',
    [
      new Ingredient('Oil', 13),
      new Ingredient('Banana', 1),
    ])
];

getRecipes(){
  return this.recipes;
}

getRecipeById(index: number) {
  return this.recipes[index];
}

addIngredientsToShoppingList(recipe: Recipe){
  this.slService.AddIngridients(recipe.ingredients);
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
