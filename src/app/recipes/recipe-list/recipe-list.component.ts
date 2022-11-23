import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('test recipe 1 fdfdfsfsdf','test description dsfsdfsdfsdfsdfsdfsdf','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,300'),
    new Recipe('test recipe 2 fdsfsdfdsfsd','test description sdfsdfsdfsdfsdfdsff','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,300')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
