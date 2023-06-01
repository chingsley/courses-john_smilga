import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import cartItems, { ICartItem } from '../../data/cartItems';

const url = 'https://course-api.com/react-useReducer-cart-project';

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

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name: string, thunkAPI) => {
    try {
      console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`something went wrong, ${error}`);
    }
  }
);


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }: PayloadAction<{ id: string; }>) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (!cartItem) return;
      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, { payload }: PayloadAction<{ id: string; }>) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (!cartItem) return;
      if (cartItem.quantity - 1 === 0) {
        state.cartItems = state.cartItems.filter((item) => item.id !== payload.id);
      } else {
        cartItem.quantity = cartItem.quantity - 1;
      }
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
