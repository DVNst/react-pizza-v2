import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TRootState } from '../store';

type TCardItem = { id: string; imageUrl: string; title: string; type: number; size: number; price: number };
export interface ICardPizzaItem extends TCardItem { count: number };

type TState =  { pizzas: Array<ICardPizzaItem>; totalCount: number; totalPrice: number };

const initialState: TState = {
  pizzas: [],
  totalCount: 0,
  totalPrice: 0,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addPizza: (state, action: PayloadAction<TCardItem>) => {
      const { id, type, size } = action.payload;
      const fintItem = state.pizzas.find(
        (pizza) => pizza.id === id && pizza.type === type && pizza.size === size,
      );

      if (fintItem && fintItem.count) {
        fintItem.count += 1;
      } else {
        state.pizzas.push({ ...action.payload, count: 1 });
      }

      state.totalCount += 1;
      state.totalPrice += action.payload.price;
    },

    deletePizza: (state, action: PayloadAction<ICardPizzaItem>) => {
      const { id, type, size } = action.payload;
      const fintItem = state.pizzas.find(
        (pizza) => pizza.id === id && pizza.type === type && pizza.size === size,
      );

      if (fintItem) {
        if (fintItem.count) {
          fintItem.count -= 1;
        }

        if (fintItem.price) {
          state.totalPrice -= fintItem.price;
        }
      }
      state.totalCount -= 1;
    },

    removePizza: (state, action: PayloadAction<ICardPizzaItem>) => {
      const { id, type, size, count, price } = action.payload;
      state.pizzas = [
        ...state.pizzas.filter(
          (pizza) => !(pizza.id === id && pizza.type === type && pizza.size === size),
        ),
      ];
      if (count) {
        state.totalCount -= count;
        state.totalPrice -= price * count;
      }
    },

    clearCard: (state) => {
      state.pizzas = initialState.pizzas;
      state.totalCount = initialState.totalPrice;
      state.totalPrice = initialState.totalPrice;
    },
  },
});

export const selectCart = (state: TRootState) => state.card;
export const selectCartCountPizzas = (id: string) => (state: TRootState) =>
  state.card.pizzas
    .filter((pizza) => pizza.id === id)
    .reduce((sum, pizza) => sum + pizza.count, 0);

export const { addPizza, deletePizza, clearCard, removePizza } = cardSlice.actions;

export default cardSlice.reducer;
