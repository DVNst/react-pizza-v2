import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzas: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addPizza: (state, action) => {
      const { id, type, size } = action.payload;
      const fintItem = state.pizzas.find(
        (pizza) => pizza.id === id && pizza.type === type && pizza.size === size,
      );

      if (fintItem) {
        fintItem.count += 1;
      } else {
        state.pizzas.push({ ...action.payload, count: 1 });
      }

      state.totalCount += 1;
      state.totalPrice += action.payload.price;
    },
  },
});

export const { addPizza } = cardSlice.actions;

export default cardSlice.reducer;
