import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  itemCount: {},
  subTotal: {},
  price: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, item) => {
      console.log(item);
      let itemObject = item.payload;
      if (
        state.itemCount[itemObject.title] == undefined ||
        state.itemCount[itemObject.title] == null ||
        state.itemCount[itemObject.title] == 0
      ) {
        state.itemCount[itemObject.title] = 1;
        state.subTotal[itemObject.title] = itemObject.price;
        state.cartItems.push(itemObject);
      } else {
        state.itemCount[itemObject.title] += 1;
        state.subTotal[itemObject.title] += itemObject.price;
      }
      state.price = (state.price * 100 + itemObject.price * 100) / 100;
      state.price=state.price.toFixed(2);
    },
    removeItem: (state, item) => {
      let itemObject = item.payload;
      let arr = state.cartItems;
      arr = arr.map((val, index) => {
        if (val.title == itemObject.title) {
          if (state.itemCount[itemObject.title] == 1) {
            state.subTotal[itemObject.title] = 0;
            state.price = (state.price * 100 - itemObject.price * 100) / 100;
            state.itemCount[itemObject.title] = 0;
            arr.splice(index, 1);
          } else {
            state.subTotal[itemObject.title] -= itemObject.price;
            state.price = (state.price * 100 - itemObject.price * 100) / 100;
            state.itemCount[itemObject.title] -= 1;
          }
        }
      });
    },
    clearCart: (state, item) => {
      state.cartItems = [];
      state.itemCount = {};
      state.subTotal = {};
      state.price = 0;
    },
    removeTotalItem: (state, item) => {
      let itemObj = item.payload;
      let arr = state.cartItems;
      arr = arr.map((item, index) => {
        if (item.title == itemObj.title) {
          arr.splice(index, 1);
        }
      });
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
