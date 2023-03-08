import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/Recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

constructor(private httpClient: HttpClient,
            private recipeService: RecipeService) {}

storeRecipe(){
  const recipes = this.recipeService.getRecipes();

  return this.httpClient.put('https://myfirstprojwithapi-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(
    response => {
      console.log(response);
    });
}

fetchRecipe(){
  this.httpClient.get<Recipe[]>('https://myfirstprojwithapi-default-rtdb.firebaseio.com/recipes.json').subscribe(
    response => {
      this.recipeService.setRecipes(response);
    });
}
}
