import { configureStore } from '@reduxjs/toolkit';

import sortSlice from './slices/sortSlice';
import filterSlice from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    sort: sortSlice,
    filter: filterSlice,
  },
});
