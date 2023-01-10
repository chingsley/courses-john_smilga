import { CartItem } from './data';


export type ToggleQtyType = 'inc' | 'dec';

/** ActionTypes **/
export enum ActionType {
  CLEAR_CART = 'CLEAR_CART',
  REMOVE = 'REMOVE',
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  GET_TOTALS = 'GET_TOTALS',
  LOADING = 'LOADING',
  DISPLAY_ITEMS = 'DISPLAY_ITEMS',
  TOGGLE_QUANTITY = 'TOGGLE_QUANTITY',
}

/** Actions **/
export interface clearCart {
  type: ActionType.CLEAR_CART;
}
export interface remove {
  type: ActionType.REMOVE;
  payload: number;
}
export interface increase {
  type: ActionType.INCREASE;
  payload: number;
}
export interface decrease {
  type: ActionType.DECREASE;
  payload: number;
}
export interface getTotals {
  type: ActionType.GET_TOTALS;
}
export interface loading {
  type: ActionType.LOADING;
}
export interface displayItems {
  type: ActionType.DISPLAY_ITEMS;
  payload: CartItem[];
}
export interface toggleQuantity {
  type: ActionType.TOGGLE_QUANTITY;
  payload: { id: number; type: ToggleQtyType; };
}
type Action =
  | clearCart
  | remove
  | increase
  | decrease
  | getTotals
  | loading
  | displayItems
  | toggleQuantity;

/** reducer **/
export interface State {
  cart: CartItem[];
  totalPrice: number;
  totalQuantity: number;
  loading: boolean;
}
export const initialState: State = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  loading: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.CLEAR_CART: {
      return { ...state, cart: [] };
    }
    case ActionType.REMOVE: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case ActionType.INCREASE: {
      const updatedCart = state.cart.map((item) => {
        if (item.id !== action.payload) return item;
        return { ...item, quantity: item.quantity + 1 };
      });
      return { ...state, cart: updatedCart };
    }
    case ActionType.DECREASE: {
      const updatedCart = state.cart.map((item) => {
        if (item.id !== action.payload) return item;
        return { ...item, quantity: item.quantity - 1 };
      });
      return { ...state, cart: updatedCart };
    }
    case ActionType.GET_TOTALS: {
      const { totalPrice, totalQty } = state.cart.reduce(
        (acc, item) => {
          const { price, quantity } = item;
          acc.totalPrice += (Number(price) * Number(quantity));
          acc.totalQty += Number(quantity);
          return acc;
        },
        { totalPrice: 0, totalQty: 0 }
      );
      return {
        ...state,
        totalPrice: parseFloat(totalPrice.toFixed(2)),
        totalQuantity: totalQty,
      };
    }
    case ActionType.LOADING: {
      return { ...state, loading: true };
    }
    case ActionType.DISPLAY_ITEMS: {
      return { ...state, cart: action.payload, loading: false };
    }
    case ActionType.TOGGLE_QUANTITY: {
      const updatedCart = state.cart.map(item => {
        if (item.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return { ...item, quantity: item.quantity + 1 };
          }
          if (action.payload.type === 'dec') {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
        .filter(item => item.quantity !== 0);

      return { ...state, cart: updatedCart };
    }
    default: {
      throw new Error('no matching action type');
    }
  }
};

export default reducer;
