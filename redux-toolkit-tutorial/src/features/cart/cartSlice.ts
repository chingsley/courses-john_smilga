import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import cartItems, { ICartItem } from '../../data/cartItems';

const url = 'https://course-api.com/react-useReducer-cart-project';

export interface ICartState {
  cartItems: ICartItem[];
  itemsCount: number;
  total: number;
  isLoading: boolean;
  error: string;
}

const initialState: ICartState = {
  cartItems: cartItems,
  itemsCount: cartItems.length,
  total: cartItems.reduce((acc: number, item: ICartItem) => acc + Number(item.price), 0),
  isLoading: true,
  error: ""
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
    clearError: (state) => {
      state.error = "";
    },
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
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log("fufilled: ", action);
        state.isLoading = false;
        state.cartItems = action.payload.map((item: any) => ({
          ...item,
          quantity: item.amount
        }));
        // state.error = "testing error feature";
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});


export const { clearError, clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
