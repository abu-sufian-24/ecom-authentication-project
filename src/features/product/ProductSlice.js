import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getFirebaseData,
  setDataToFirebase,
} from '../../firebase/firebaseUtils';

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: true,
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    let data = await getFirebaseData('products');
    return data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      setDataToFirebase('products/', action.payload);
      console.log(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isError = true;
      state.error = action.payload.error?.message;
    });
  },
});

export default productSlice.reducer;
export const { setProducts } = productSlice.actions;
