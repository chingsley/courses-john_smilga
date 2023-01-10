import React, {  useContext, useReducer, useEffect } from 'react';
import reducer, { State, ActionType, initialState, ToggleQtyType } from './reducer';

const url = 'http://localhost:4500/api/react-useReducer-cart-project';


interface AppContextInterface {
  cart: State["cart"];
  totalPrice: State["totalPrice"];
  totalQuantity: State["totalQuantity"];
  loading: State["loading"];
  clearCart: () => void;
  remove: (id: number) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  toggleQuantity: (id: number, type: ToggleQtyType) => void;
}
const AppContenxt = React.createContext<AppContextInterface | null>(null);

interface AppProviderProps {
  children?: React.ReactNode;
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: ActionType.CLEAR_CART });
  }

  const remove = (id: number) => {
    dispatch({ type: ActionType.REMOVE, payload: id });
  }

  const increase = (id: number) => {
    dispatch({ type: ActionType.INCREASE, payload: id });
  }

  const decrease = (id: number) => {
    dispatch({ type: ActionType.DECREASE, payload: id });
  }

  const fetchData = async () => {
    dispatch({ type: ActionType.LOADING });
    const response = await fetch(url);
    const cart = await response.json(); 
    dispatch({ type: ActionType.DISPLAY_ITEMS, payload: cart });
  }

  const toggleQuantity = (id: number, type: ToggleQtyType) => {
    dispatch({ type: ActionType.TOGGLE_QUANTITY, payload: { id, type }});
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // console.log('start.cart changed')
    dispatch({ type: ActionType.GET_TOTALS });
  }, [state.cart]);
  return (
    <AppContenxt.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleQuantity
      }}
    >
      {children}
    </AppContenxt.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContenxt);
}

export { AppContenxt, AppProvider }