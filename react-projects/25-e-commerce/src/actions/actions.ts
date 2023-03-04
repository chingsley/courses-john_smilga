import { ICartItem, CartItemCountToggleDirection } from './../types/index';
import ActionTypes from './actionTypes';

export interface AddToCart {
  type: ActionTypes.ADD_TO_CART;
  payload: Omit<ICartItem, "name" | "image" | "price" | "totalStockCount">;
}

export interface RemoveItem {
  type: ActionTypes.REMOVE_CART_ITEM;
  payload: ICartItem["id"];
}

export interface ToggleCount {
  type: ActionTypes.TOGGLE_CART_ITEM_COUNT;
  payload: {
    id: string;
    direction: CartItemCountToggleDirection;
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
  | ToggleCount
  | ClearCart
  | CountCartTotals;

