/* eslint-disable @typescript-eslint/no-explicit-any */
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
        existingItem.quantity -= 1;
      } else {
        state.items.push({
          ...action.payload,
          total_item: 1,
          quantity: action.payload.quantity - 1,
        });
      }
    },
    removeFromCart(state, action: PayloadAction<PopularOrder & ShopItem>) {
      const existingItem = state.items.find(
        (item: any) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.total_item -= 1;
        existingItem.quantity += 1;
        if (existingItem.total_item <= 0) {
          state.items = state.items.filter(
            (item: any) => item.id !== action.payload.id
          ) as any;
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItemCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const selectCartSubtotal = (state: { cart: CartState }) =>
  state.cart.items.reduce(
    (subtotal, item) => subtotal + item.price * item.total_item,
    0
  );

export default cartSlice.reducer;
