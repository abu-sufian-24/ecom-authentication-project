import { configureStore } from '@reduxjs/toolkit';

import CategoriesSlice from '../features/categories/categoriesSlice';
import productSlice from '../features/product/ProductSlice';
import authSlice from '../features/auth/authSlice';

const store = configureStore({
  reducer: {
    categories: CategoriesSlice,
    products: productSlice,
    auth: authSlice,
  },
});

export default store;
