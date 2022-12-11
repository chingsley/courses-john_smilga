import { ActionType } from "./actionTypes";

export interface AddItem {
  type: ActionType.ADD_ITEM;
  payload: { id: string; name: string; };
}

export interface RemoveItem {
  type: ActionType.REMOVE_ITEM;
  payload: string;
}

export interface NoValue {
  type: ActionType.NO_VALUE;
}

export interface CloseModal {
  type: ActionType.CLOSE_MODAL;
}

export type Action =
  | AddItem
  | RemoveItem
  | NoValue
  | CloseModal;