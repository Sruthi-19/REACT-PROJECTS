import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
  productArray: [],
  isFetching: false,
  cartArray: [],
  subTotal: {},
  price: 0,
  itemCount: {},
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state) => {
      state.isFetching = true;
    },
    fetchProductsSuccess: (state, action) => {
      state.isFetching = false;
      state.productArray = action.payload.result;
    },
    fetchProductsFailed: (state, action) => {
      state.isFetching = true;
    },
    addItem: (state, action) => {},
    addItemSuccess: (state, action) => {
      if (action.payload.result != undefined || action.payload.result != null) {
        state.cartArray.push(action.payload.result);
      }
      state.itemCount[action.payload.title] = action.payload.countResult;
      state.price = action.payload.price;
      state.subTotal[action.payload.title] = action.payload.subTotal;
    },
    removeItem: (state, action) => {},
    removeItemSuccess: (state, action) => {
      state.itemCount[action.payload.title] = action.payload.countResult;
      state.price = action.payload.price;
      state.subTotal[action.payload.title] = action.payload.subTotal;

      console.log("cartArray", current(state.cartArray));
      console.log("itemCnt", current(state.itemCount));
      console.log("subTotal", current(state.subTotal));
    },
  },
});

export const {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailed,
  addItem,
  addItemSuccess,
  removeItem,
  removeItemSuccess,
} = ProductSlice.actions;

export default ProductSlice.reducer;
