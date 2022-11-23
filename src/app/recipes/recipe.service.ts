import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './Recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

constructor() { }

private recipes : Recipe[] = [
  new Recipe('test recipe 1 fdfdfsfsdf','test description dsfsdfsdfsdfsdfsdfsdf','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,300'),
  new Recipe('test recipe 2 fdsfsdfdsfsd','test description sdfsdfsdfsdfsdfdsff','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,300')
];

recipeSelected = new EventEmitter<Recipe>();

getRecipes(){
  return this.recipes.slice();
}

}
