import { ICartItem } from './../types/index';
import ActionTypes from './actionTypes';

export interface AddToCart {
  type: ActionTypes.ADD_TO_CART;
  payload: ICartItem;
}

export interface RemoveItem {
  type: ActionTypes.REMOVE_CART_ITEM;
  payload: ICartItem["id"];
}

export interface ToggleAmount {
  type: ActionTypes.TOGGLE_CART_ITEM_AMOUNT;
  payload: {
    id: string;
    value: string;
  };
}

export interface ClearCart {
  type: ActionTypes.CLEAR_CART;
}

export interface CountCartTotals {
  type: ActionTypes.COUNT_CART_TOTALS;
}

export type Action =
  | AddToCart
  | RemoveItem
  | ToggleAmount
  | ClearCart
  | CountCartTotals;

