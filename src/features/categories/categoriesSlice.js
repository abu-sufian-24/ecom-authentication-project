import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFirebaseData } from '../../firebase/firebaseUtils';
import { handleAsyncActions } from './handleAsynThunk';

const initialState = {
  categories: [],
  isLoading: false,
  isError: false,
  error: true,
};

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const data = await getFirebaseData('categories');

    return data;
  }
);
const Categorieslice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    handleAsyncActions(builder, 'categories');
  },
});

export default Categorieslice.reducer;

// const Categorieslice = createSlice({
//   name: 'categories',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(getCategories.pending, state => {
//         state.isError = false;
//         state.isLoading = true;
//       })
//       .addCase(getCategories.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.categories = action.payload;
//       })
//       .addCase(getCategories.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.error = action.error.message;
//       });
//   },
// });

// export default Categorieslice.reducer;
