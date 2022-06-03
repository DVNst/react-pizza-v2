import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { sortingTypes } from '../../variables';

export const fetchPizzasByFiltrs = createAsyncThunk('pizzas/fetchByFilters', async (params) => {
  const { activeSort, activeFilter, searchText } = params;

  const sort = `?sortBy=${sortingTypes[activeSort].sortProperty}&order=asc`; //asc | desc
  const filter = activeFilter ? `&category=${activeFilter}` : '';
  const search = searchText && `&title=${searchText}`;

  const res = await axios.get(
    `https://62815ab29fac04c65404537c.mockapi.io/pizzas${sort}${filter}${search}`,
  );
  return res.data;
});

const initialState = {
  items: [],
  status: 'success', //success | loading | error
  count: 0,
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzasByFiltrs.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPizzasByFiltrs.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = [...action.payload];
      state.count = action.payload.length;
    },
    [fetchPizzasByFiltrs.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
      state.count = 0;
    },
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
