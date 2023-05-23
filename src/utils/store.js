import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// this store will contain slices
const store = configureStore({
  // need to pass slice which will have name and sliceName
  reducer: {
    cart: cartSlice,
  },
});

export default store;
