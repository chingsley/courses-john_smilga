import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface CartState {
  cartItems: string[];
  itemsCount: number;
  total: number;
  isLoading: boolean;
}

const initialState: CartState = {
  cartItems: [],
  itemsCount: 0,
  total: 0,
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
