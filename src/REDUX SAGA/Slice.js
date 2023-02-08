import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsArray: [],
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload);
      state.productsArray.push(action.payload);
      console.log("SLICE", action.payload);
      
    },
  },
});

export const { addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
