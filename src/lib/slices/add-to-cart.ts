// src/store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PopularOrder, ShopItem } from '../schema';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: PopularOrder[] & ShopItem[];
}
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemCart(state, action: PayloadAction<PopularOrder & ShopItem>) {
      const existingItem = state.items.find(
        (item: any) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.total_item += 1;
        existingItem.quantity -=1;
      } else {
        state.items.push({
          ...action.payload,
          total_item: 1,
          quantity: action.payload.quantity - 1
        });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItemCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

export default cartSlice.reducer;
