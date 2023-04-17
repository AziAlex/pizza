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
      state.allPizza = pizzas.filter((pizza) => pizza.types === "meat");
    },
    SortVegetarian: (state) => {
      state.allPizza = pizzas.filter((pizza) => pizza.types === "vega");
    },
    SortGrill: (state) => {
      state.allPizza = pizzas.filter((pizza) => pizza.types === "gril");
    },
    Sortsharp: (state) => {
      state.allPizza = pizzas.filter((pizza) => pizza.types === "sharp");
    },
    SortClose: (state) => {
      state.allPizza = pizzas.filter(
        (pizza) => pizza.name === "Закрытая-пицца"
      );
    },
    SortABC: (state) => {
      state.allPizza = state.allPizza.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    },
    SortCBA: (state) => {
      state.allPizza = state.allPizza.sort((a, b) => {
        if (b.name < a.name) return -1;
        if (b.name > a.name) return 1;
        return 0;
      });
    },
    Sort123: (state) => {
      state.allPizza = state.allPizza.sort((a, b) => a.price - b.price);
    },
    Sort321: (state) => {
      state.allPizza = state.allPizza.sort((a, b) => b.price - a.price);
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
  SortABC: sortSlice.actions.SortABC,
  SortCBA: sortSlice.actions.SortCBA,
  Sort123: sortSlice.actions.Sort123,
  Sort321: sortSlice.actions.Sort321,
};
export default sortSlice.reducer;
