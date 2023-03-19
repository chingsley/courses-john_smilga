import { CartItemCountToggleDirection, ICartState } from "../types/carts";
import { CartAction } from "../actions/cartActions";
import ActionTypes from "../actions/actionTypes";

const cartReducer = (state: ICartState, action: CartAction) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const { id, color, count, product } = action.payload;
      const itemID = id + color;

      const cartItem = state.cart.find((item) => item.id = itemID);
      if (cartItem) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id !== itemID) return item;
            return {
              ...item,
              count: Math.min(item.totalStockCount, item.count + count)
            };
          })
        };
      } else {
        const newItem = {
          id: itemID,
          name: product.name,
          color,
          count,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] } as ICartState;
      }
    }
    case ActionTypes.REMOVE_CART_ITEM: {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    }
    case ActionTypes.TOGGLE_CART_ITEM_COUNT: {
      const { id, direction } = action.payload;
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id !== id) return item;
          if (direction === CartItemCountToggleDirection.Inc) {
            return {
              ...item,
              count: Math.max(item.count + 1, item.totalStockCount)
            };
          } else {
            return {
              ...item,
              count: Math.min(item.count - 1, 1)
            };
          }
        })
      };
    }
    case ActionTypes.CLEAR_CART: {
      return { ...state, cart: [] };
    }
    case ActionTypes.COUNT_CART_TOTALS: {
      // console.log(state.cart);
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { count, price } = cartItem;
          console.log({
            'total.total_items': total.total_items, count
          });
          total.total_items += count;
          total.total_amount += price * count;
          return total;
        },
        { total_items: 0, total_amount: 0 });

      return { ...state, total_items, total_amount };
    }
    default: {
      console.error(`No matching "${(action as CartAction).type}" - action type`);
      return state;
    }
  }
};

export default cartReducer;