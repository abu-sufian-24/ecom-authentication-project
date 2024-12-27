// import { configureStore } from '@reduxjs/toolkit';
// import productSlice from '../features/products/productsSlice';
// import categorySlice from '../features/categories/categorySlice';
// import authSlice from '../features/auth/authSlice';

import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/product/ProductSlice';
import categorySlice from '../features/categories/categoriesSlice';
import authSlice from '../features/auth/authSlice';
import cartSlice from '../features/cart/cartSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
    categories: categorySlice,
    auth: authSlice,
    cart: cartSlice,
  },
});

export default store;
