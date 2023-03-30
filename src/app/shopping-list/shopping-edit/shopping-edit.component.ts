import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/Ingredient';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') form: NgForm;

  subscription: Subscription;
  editMode: boolean = false;

  constructor(private store: Store<fromShoppingList.AppState>) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit);
  }

  ngOnInit() {
    this.subscription = this.store.select('shoppingListKey').subscribe(state => {
      if (state.editedIngredientIndex > -1){
        this.editMode = true;
        this.form.setValue({
          name: state.editedIngredient?.name,
          amount: state.editedIngredient?.amount
        });

      }else{
        this.editMode = false;
      }
    });
  }

  onAddedClick(){

    const ingridient = new Ingredient(this.form.value.name, this.form.value.amount);

    if(this.editMode){
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(ingridient));
    }else{
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingridient));
    }

    this.editMode = false;
    this.form.reset();
    
  }

  onClear(){
    this.editMode = false;
    this.form.reset();
    this.store.dispatch(new ShoppingListActions.StopEdit);
  }

  onDelete(){
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }

}
