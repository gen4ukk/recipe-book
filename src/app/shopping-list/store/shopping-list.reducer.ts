import { Ingredient } from "src/app/shared/Ingredient";
import * as ShoppingListActions from "./shopping-list.actions";


export interface State{
    ingredients: Ingredient[],
    editedIngredient: Ingredient|null,
    editedIngredientIndex: number,
}

export interface AppState{
    shoppingListKey : State
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10),
        new Ingredient('Tomatino', 20),
      ],
    editedIngredient: null,
    editedIngredientIndex: -1,
}

export function shoppingListReducer(state: State = initialState, action: ShoppingListActions.ShoppingListActions){
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }

        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }

        case ShoppingListActions.UPDATE_INGREDIENT:
            const updatedListIngredients = [...state.ingredients];
            updatedListIngredients[state.editedIngredientIndex] = action.payload;

            return {
                ...state,
                ingredients: updatedListIngredients,
                editedIngredient: null,
                editedIngredientIndex: -1,
            }

        case ShoppingListActions.DELETE_INGREDIENT:
            const updatedListIngredients2 = state.ingredients.filter((ing, ind) => {
                return ind !== state.editedIngredientIndex;
            });

            return {
                ...state,
                ingredients: updatedListIngredients2,
                editedIngredient: null,
                editedIngredientIndex: -1,
            }

        case ShoppingListActions.START_EDIT:
            return {
                ...state,
                editedIngredient : {...state.ingredients[action.payload]},
                editedIngredientIndex : action.payload
            }

        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient : null,
                editedIngredientIndex : -1
            }
        
        default:
            return state;
    }
}