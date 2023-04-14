import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pizzas } from "../../components/main/dataPizza";
import { Pizza } from "../../components/main/pizzaTypes";

const initialState = {
  allPizza: pizzas,
};

export const sortSlice = createSlice({
  name: "sortPizza",
  initialState,
  reducers: {
    SortDefault: (state) => {
      state.allPizza = pizzas;
    },
    SortMeat: (state) => {
      state.allPizza = pizzas.filter(
        (pizza) => pizza.name === "Сырный цыпленок"
      );
    },
    SortVegetarian: (state) => {
      state.allPizza = pizzas.filter(
        (pizza) => pizza.name === "Чизбургер-пицца"
      );
    },
    SortGrill: (state) => {
      state.allPizza = pizzas.filter((pizza) => pizza.name === "Сырная");
    },
    Sortsharp: (state) => {
      state.allPizza = pizzas.filter(
        (pizza) => pizza.name === "Креветки по-азиатски"
      );
    },
    SortClose: (state) => {
      state.allPizza = pizzas.filter(
        (pizza) => pizza.name === "Закрытая-пицца"
      );
    },
  },
});

export const sort = {
  SortClose: sortSlice.actions.SortClose,
  SortDefault: sortSlice.actions.SortDefault,
  SortGrill: sortSlice.actions.SortGrill,
  SortMeat: sortSlice.actions.SortMeat,
  SortVegetarian: sortSlice.actions.SortVegetarian,
  Sortsharp: sortSlice.actions.Sortsharp,
};
export default sortSlice.reducer;
