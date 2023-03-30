import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ingredient } from '../shared/Ingredient';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private store: Store<fromShoppingList.AppState>) { }

  ingredients: Observable<{ ingredients: Ingredient[] }>;

  ngOnInit() {
    this.ingredients = this.store.select('shoppingListKey');
  }

  onEditIngredient(index: number){
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

}
