import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/Recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { tap, map, exhaustMap, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

constructor(private httpClient: HttpClient,
            private recipeService: RecipeService,
            private authService: AuthService) {}

storeRecipe(){
  const recipes = this.recipeService.getRecipes();

  return this.httpClient.put('https://myfirstprojwithapi-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(
    response => {
      console.log(response);
    });
}

async fetchRecipe() {
  const recipes = await this.httpClient
    .get<Recipe[]>('https://myfirstprojwithapi-default-rtdb.firebaseio.com/recipes.json')
    .toPromise();

    if (recipes){
      this.recipeService.setRecipes(recipes);
    }
  
}

}
