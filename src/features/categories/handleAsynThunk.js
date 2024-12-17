import { getCategories } from './categoriesSlice';

const handleAsyncActions = builder => {
  builder
    .addCase(getCategories.pending, state => {
      state.isError = false;
      state.isLoading = true;
    })
    .addCase(getCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    })
    .addCase(getCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
};
export { handleAsyncActions };

//--------------------------------------------ctgpt code------------------------------------
// Function to handle common builder logic
// const handleAsyncActions = (builder, entity) => {
//   builder
//     .addMatcher(
//       action => action.type.endsWith('/pending'),
//       state => {
//         state.isLoading = true;
//         state.isError = false;
//         state.error = null;
//       }
//     )
//     .addMatcher(
//       action => action.type.endsWith('/fulfilled'),
//       (state, action) => {
//         state.isLoading = false;
//         state[entity] = action.payload; // Dynamically update entity
//       }
//     )
//     .addMatcher(
//       action => action.type.endsWith('/rejected'),
//       (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.error = action.error.message;
//       }
//     );
// };
