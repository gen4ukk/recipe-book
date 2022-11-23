import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingridientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddedClick(){
    const nameIng: string = this.nameInputRef.nativeElement.value;
    const amountIng: number = this.amountInputRef.nativeElement.value;
    const ingridient = new Ingredient(nameIng, amountIng);
    this.ingridientAdded.emit(ingridient);
  }

}
