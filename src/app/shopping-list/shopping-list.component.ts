import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingListservice: ShoppingListService) { }

  ingredients: Ingredient[];

  ngOnInit() {
    this.ingredients = this.shoppingListservice.GetIngredients();
  }

  onEditIngredient(index: number){
    this.shoppingListservice.ingredientEdit.next(index);
  }

}
