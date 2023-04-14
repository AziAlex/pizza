import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzaState } from "../../components/main/pizzaTypes";

interface Items {
  buyItems: PizzaState[];
}

const initialState: Items = {
  buyItems: [],
};

const buyState = createSlice({
  name: "buyItems",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<PizzaState>) => {
      state.buyItems.push(action.payload);
    },
  },
});

export const { addItem } = buyState.actions;
export default buyState.reducer;
