import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { sortingTypes } from '../../variables';
import { TRootState } from '../store';
import { TFilters } from './filterSlice';

// const STATUS = {'SUCCESS': 'success', 'LOADING': 'loading', 'ERROR': 'error'};
export type TPizzasItem = { id: string; imageUrl: string; title: string; types: number[]; sizes: number[]; price: number }; 
interface IPizzas {
  items: Array<TPizzasItem>;
  status: 'success' | 'loading' | 'error';
  count: number;
};

export const fetchPizzasByFiltrs = createAsyncThunk('pizzas/fetchByFilters', async (params: TFilters) => {
  const { activeSort, activeFilter, searchText } = params;

  const sort = `?sortBy=${sortingTypes[activeSort].sortProperty}&order=asc`; //asc | desc
  const filter = activeFilter ? `&category=${activeFilter}` : '';
  const search = searchText && `&title=${searchText}`;

  const res = await axios.get(
    `https://62815ab29fac04c65404537c.mockapi.io/pizzas${sort}${filter}${search}`,
  );
  return res.data;
});

export const fetchPizzaByID = createAsyncThunk('pizzas/fetchByID', async (params : {id: string}) => {
  const id = params.id
  const res = await axios.get('https://62815ab29fac04c65404537c.mockapi.io/pizzas/' + id);
  return res.data;
});

const initialState: IPizzas = {
  items: [],
  status: 'success', //success | loading | error
  count: 0,
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<TPizzasItem[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzasByFiltrs.pending, (state: IPizzas) => {
      state.status = 'loading';
    })
    builder.addCase(fetchPizzasByFiltrs.fulfilled, (state: IPizzas, action: PayloadAction<TPizzasItem[]>) => {
      state.status = 'success';
      state.items = [...action.payload];
      state.count = action.payload.length;
    })
    builder.addCase(fetchPizzasByFiltrs.rejected, (state: IPizzas) => {
      state.status = 'error';
      state.items = [];
      state.count = 0;
    })
    builder.addCase(fetchPizzaByID.pending, (state: IPizzas) => {
      state.status = 'loading';
    })
    builder.addCase(fetchPizzaByID.fulfilled, (state: IPizzas, action: PayloadAction<TPizzasItem>) => {
      state.status = 'success';
      state.items = [action.payload];
      state.count = 1;
    })
    builder.addCase(fetchPizzaByID.rejected, (state: IPizzas) => {
      state.status = 'error';
      state.items = [];
      state.count = 0;
    })
  },
});

export const selectorPizzas = (state: TRootState) => state.pizzas;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
