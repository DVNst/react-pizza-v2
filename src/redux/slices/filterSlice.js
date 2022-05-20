import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeFilter: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
