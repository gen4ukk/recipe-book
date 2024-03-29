import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './recipe-book.routing';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { shoppingListReducer, State } from './shopping-list/store/shopping-list.reducer';

@NgModule({
  declarations: [				
    AppComponent,
    HeaderComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ shoppingListKey : shoppingListReducer as ActionReducer<State> }),
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
