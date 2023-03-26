import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoadingSpinnerComponent,
    DropdownDirective,
  ],
  exports: [
    CommonModule,
    LoadingSpinnerComponent,
    DropdownDirective,
  ]
})

export class SharedModule {}
