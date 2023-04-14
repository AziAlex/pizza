import { configureStore } from "@reduxjs/toolkit";
import sortSlice from "./sortPizza/sortSlice";

export const store = configureStore({
  reducer: {
    newPizzaList: sortSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
