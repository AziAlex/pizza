import { configureStore } from "@reduxjs/toolkit";
import sortSlice from "./sortPizza/sortSlice";
import buyState from "./buyPizza/buySlice";

export const store = configureStore({
  reducer: {
    newPizzaList: sortSlice,
    buyBasket: buyState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
