import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddedClick(){
    const nameIng: string = this.nameInputRef.nativeElement.value;
    const amountIng: number = this.amountInputRef.nativeElement.value;
    const ingridient = new Ingredient(nameIng, amountIng);
    this.shoppingListService.AddIngridient(ingridient);
  }

}
