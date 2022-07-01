import { createSlice } from '@reduxjs/toolkit';

import { TRootState } from '../store';

export type TFilters = {activeSort: number; activeFilter: number; searchText: string};

const initialState: TFilters = {
  activeFilter: 0,
  activeSort: 0,
  searchText: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action : {payload: typeof initialState.activeFilter; type: string;}) => {
      state.activeFilter = action.payload;
    },
    changeSort: (state, action : {payload: typeof initialState.activeSort; type: string;}) => {
      state.activeSort = action.payload;
    },
    changeSearch: (state, action : {payload: typeof initialState.searchText; type: string;}) => {
      state.searchText = action.payload;
    },
  },
});

export const selectFilters = (state: TRootState) => state.filter;
export const selectActiveFilter = (state: TRootState) => state.filter.activeFilter;
export const selectActiveSort = (state: TRootState) => state.filter.activeSort;
export const selectSearch = (state: TRootState) => state.filter.searchText;

export const { changeFilter, changeSort, changeSearch } = filterSlice.actions;

export default filterSlice.reducer;
