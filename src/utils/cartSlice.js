import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  // name of the slice and initial state
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // create action mapped with the function to be called
    addItem: (state, action) => {
      // here is initial action and state. As state contain items so we need to push it
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // this remove the target item from the cart - mapping structure to be same
      state.items = state.items.filter(
        (item) => item?.card?.info?.id !== action.payload.card?.info?.id
      );
      // this will remove last item
      //state.items.pop(action.payload);
    },
    clearCart: (state) => {
      // logic to clear cart
      state.items = [];
    },
  },
});

// Need to export all actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Need to export reducer. It will export all reducer
export default cartSlice.reducer;
