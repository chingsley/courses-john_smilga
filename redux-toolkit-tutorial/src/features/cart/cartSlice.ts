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
    increment: (state) => {
    },
    decrement: (state) => {
    },
    incrementBynumberOfItems: (state, action: PayloadAction<number>) => {
    },
  },
});

export default cartSlice.reducer;
