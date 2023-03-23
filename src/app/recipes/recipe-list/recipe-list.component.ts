import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../Recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  private recipeSub: Subscription;;
  recipes : Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    
    this.recipeSub = this.recipeService.recipeChanged.subscribe(recipes =>{
      this.recipes = recipes;
    });
  }

  ngOnDestroy(): void {
    this.recipeSub.unsubscribe();
  }

}
