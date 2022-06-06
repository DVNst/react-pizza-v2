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

    deletePizza: (state, action) => {
      const { id, type, size } = action.payload;
      const fintItem = state.pizzas.find(
        (pizza) => pizza.id === id && pizza.type === type && pizza.size === size,
      );

      fintItem.count -= 1;
      state.totalCount -= 1;
      state.totalPrice -= fintItem.price;
    },

    removePizza: (state, action) => {
      const { id, type, size, count, price } = action.payload;
      state.pizzas = [
        ...state.pizzas.filter(
          (pizza) => !(pizza.id === id && pizza.type === type && pizza.size === size),
        ),
      ];
      state.totalCount -= count;
      state.totalPrice -= price * count;
    },

    clearCard: (state) => {
      state.pizzas = initialState.pizzas;
      state.totalCount = initialState.totalPrice;
      state.totalPrice = initialState.totalPrice;
    },
  },
});

export const selectCart = (state) => state.card;
export const selectCartCountPizzas = (id) => (state) =>
  state.card.pizzas.filter((pizza) => pizza.id === id).reduce((sum, pizza) => sum + pizza.count, 0);

export const { addPizza, deletePizza, clearCard, removePizza } = cardSlice.actions;

export default cardSlice.reducer;
