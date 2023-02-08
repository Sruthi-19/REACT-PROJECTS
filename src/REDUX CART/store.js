import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slice";
import wishReducer from "./slice1"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer,
  },
});
