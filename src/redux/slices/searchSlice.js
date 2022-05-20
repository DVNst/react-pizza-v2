import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchText: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { changeSearch } = searchSlice.actions;

export default searchSlice.reducer;
