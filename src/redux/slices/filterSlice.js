import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeFilter: 0,
  activeSort: 0,
  searchText: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    changeSort: (state, action) => {
      state.activeSort = action.payload;
    },
    changeSearch: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { changeFilter, changeSort, changeSearch } = filterSlice.actions;

export default filterSlice.reducer;
