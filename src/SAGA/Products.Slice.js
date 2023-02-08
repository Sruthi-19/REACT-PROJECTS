import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productArray: [],
  isFetch: false,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.isFetch = true;
    },
    getProductsSuccess: (state, action) => {
      state.productArray = action.payload.result;
      state.isFetch = false;
      console.log("Array", state.productArray);
    },
    getProductsFailed: (state, action) => {
      console.log("get products failed");
    },
  },
});

export const { getProducts, getProductsSuccess, getProductsFailed } =
  ProductSlice.actions;
export default ProductSlice.reducer;
