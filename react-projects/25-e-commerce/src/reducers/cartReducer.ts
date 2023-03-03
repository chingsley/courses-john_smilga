import { IState } from "../types";
import { Action } from "../actions/actions";
import ActionTypes from "../actions/actionTypes";

const cartReducer = (state: IState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const { id, color, amount, product } = action.payload;
      const itemID = id + color;

      const cartItem = state.cart.find((item) => item.id = itemID);
      if (cartItem) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id !== itemID) return item;
            return {
              ...item,
              amount: Math.min(item.max, item.amount + amount)
            };
          })
        };
      } else {
        const newItem = {
          id: itemID,
          name: product.name,
          color,
          amount,
          imgage: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] } as IState;
      }
    }
    case ActionTypes.REMOVE_CART_ITEM: {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    }
    case ActionTypes.TOGGLE_CART_ITEM_AMOUNT: {
      const { id, value } = action.payload;
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id !== id) return item;
          if (value === 'inc') {
            return {
              ...item,
              amount: Math.max(item.amount + 1, item.max)
            };
          } else {
            return {
              ...item,
              amount: Math.min(item.amount - 1, 1)
            };
          }
        })
      };
    }
    case ActionTypes.CLEAR_CART: {
      return { ...state, cart: [] };
    }
    case ActionTypes.COUNT_CART_TOTALS: {
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.total_items += amount;
          total.total_amount += price * amount;
          return total;
        },
        { total_items: 0, total_amount: 0 });

      return { ...state, total_items, total_amount };
    }
    default: {
      console.error(`No matching "${(action as Action).type}" - action type`);
      return state;
    }
  }
};

export default cartReducer;