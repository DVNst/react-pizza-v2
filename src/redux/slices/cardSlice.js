import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pizzas: []
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addPizza: (state, action) => {
      // const {id, type, size} = action.payload;
      // const finDuplicatePizza = state.pizzas.findIndex((pizza) => pizza.id === id && pizza.type === type && pizza.size === size);
      // if (finDuplicatePizza != -1) {
      //   console.log('find');
      //   console.log(finDuplicatePizza);
      //   state.pizzas[finDuplicatePizza].counter += 1;
      // } else {
      //   console.log('[...state.pizzas, {...action.payload, counter: 1}', [...state.pizzas, {...action.payload, counter: 1}]);
      //   state.pizzas = [...state.pizzas, {...action.payload, counter: 1}];
      // }
      // console.log('state.pizzas', {...state.pizzas});

      // const duplicatePizzaID = state.pizzas.findIndex(pizza => pizza.id === action.payload.id);
      

      // if (duplicatePizzaID != -1) {
      //   console.log('duplicatePizzaID', duplicatePizzaID);
      //   state.pizzas = 
      // } else {
      //   state.pizzas = [...state.pizzas, {...action.payload, counter: 1}];
      // }
      // console.log('state.pizzas', state.pizzas);

      const fintItem = state.pizzas.find((obj) => obj.id === action.payload.id);

      if (fintItem) {
        fintItem.counter += 1;
      } else {
        state.pizzas.push({...action.payload, counter: 1});
      }
      console.log('state.pizzas', state.pizzas);
    },
  },
});

export const { addPizza } = cardSlice.actions;

export default cardSlice.reducer;
