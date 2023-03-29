import React, { useEffect, useContext, useReducer } from 'react';
import {
  ICartState,
  ICartItemProductInfo,
  CartItemCountToggleDirection,
} from '../types/carts';
import cartReducer from '../reducers/cartReducer';
import ActionTypes from '../actions/actionTypes';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (!cart) return [];

  return JSON.parse(cart);
};

interface ICartContext extends ICartState {
  addToCart: (
    id: string,
    color: string,
    count: number,
    product: ICartItemProductInfo
  ) => void;
  removeItem: (id: string) => void;
  toggleCount: (id: string, direction: CartItemCountToggleDirection) => void;
  clearCart: () => void;
}

const initialState: ICartState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext<ICartContext | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode; }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (
    id: string,
    color: string,
    count: number,
    product: ICartItemProductInfo
  ) => {
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: { id, color, count, product },
    });
  };

  const removeItem = (id: string) => {
    dispatch({ type: ActionTypes.REMOVE_CART_ITEM, payload: id });
  };

  const toggleCount = (id: string, direction: CartItemCountToggleDirection) => {
    dispatch({
      type: ActionTypes.TOGGLE_CART_ITEM_COUNT,
      payload: { id, direction },
    });
  };

  const clearCart = () => {
    dispatch({ type: ActionTypes.CLEAR_CART });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch({ type: ActionTypes.COUNT_CART_TOTALS });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleCount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const UseCartContext = () => {
  return useContext(CartContext);
};
