import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/Ingredient';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') form: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  editItemIndex: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.ingredientEdit.subscribe((index: number) => {
      this.editMode = true;
      this.editItemIndex = index;

      this.editItem = this.shoppingListService.GetIngredient(this.editItemIndex);
      this.form.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      });
    });
  }

  onAddedClick(){

    const ingridient = new Ingredient(this.form.value.name, this.form.value.amount);

    if(this.editMode){
      this.shoppingListService.UpdateIngedient(this.editItemIndex, ingridient);
    }else{
      this.shoppingListService.AddIngridient(ingridient);
    }

    this.editMode = false;
    this.form.reset();
    
  }

  onClear(){
    this.editMode = false;
    this.form.reset();
  }

  onDelete(){
    this.shoppingListService.DeleteIngredient(this.editItemIndex);
    this.onClear();
  }

  

}
