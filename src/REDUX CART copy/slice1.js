import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  wishItems: [],
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addWish: (state, item) => {
      let title = item.payload;
      let wishArray = state.wishItems;
      if (!wishArray.includes(title)) {
        wishArray.push(title);
      }
      console.log(current(wishArray));
    },
  },
});

export const { addWish } = wishSlice.actions;
export default wishSlice.reducer;
