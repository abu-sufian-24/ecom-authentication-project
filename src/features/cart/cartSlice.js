import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    getCarts: (state, action) => {
      state.cart = action.payload;
    },
    // addToCart: (state, action) => {
    //   const newItem = action.payload;
    //   const existingItem = state.cart.find(item => item.id === newItem.id);
    //   state.totalQuantity++;
    //   state.totalAmount += newItem.price;
    //   if (!existingItem) {
    //     state.cart.push({
    //       id: newItem.id,
    //       title: newItem.title,
    //       quantity: 1,
    //       total: newItem.price,
    //       price: newItem.price,
    //     });
    //   } else {
    //     existingItem.quantity++;
    //     existingItem.total = existingItem.total + newItem.price;
    //   }
    // },
    // removeFromCart: (state, action) => {
    //   const id = action.payload;
    //   const existingItem = state.cart.find(item => item.id === id);
    //   state.totalQuantity--;
    //   state.totalAmount -= existingItem.price;
    //   if (existingItem.quantity === 1) {
    //     state.cart = state.cart.filter(item => item.id !== id);
    //   } else {
    //     existingItem.quantity--;
    //     existingItem.total = existingItem.total - existingItem.price;
    //   }
    // },
  },
});

export default cartSlice.reducer;
export const { getCarts } = cartSlice.actions;
