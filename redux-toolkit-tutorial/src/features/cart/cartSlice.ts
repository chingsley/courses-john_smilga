import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import cartItems, { ICartItem } from '../../data/cartItems';


export interface ICartState {
  cartItems: ICartItem[];
  itemsCount: number;
  total: number;
  isLoading: boolean;
}

const initialState: ICartState = {
  cartItems: cartItems,
  itemsCount: cartItems.length,
  total: cartItems.reduce((acc: number, item: ICartItem) => acc + Number(item.price), 0),
  isLoading: true,
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (!cartItem) return;
      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (!cartItem) return;
      cartItem.quantity = cartItem.quantity - 1;
    },
    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        quantity += item.quantity;
        total += item.quantity * Number(item.price);
      });
      state.itemsCount = quantity;
      state.total = total;
    },
  },
});


export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
