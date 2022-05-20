import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSort: 0,
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    changeSort: (state, action) => {
      state.activeSort = action.payload;
    },
  },
});

export const { changeSort } = sortSlice.actions;

export default sortSlice.reducer;
