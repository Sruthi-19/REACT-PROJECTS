import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
  isFetching: false,
};

const calcualatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addNumbers: (state, action) => {
      state.isFetching = true;
    },
    subNumbers:(state,action)=>{
      state.isFetching=true;
    },
    addNumbersSuccess: (state, action) => {
      console.log("@LN 16: ", action);
      state.isFetching = false;
      state.result = action.payload;
    },
    addNumbersFailed: (state, action) => {
      console.log("@LN 20: ", action);
      state.isFetching = false;
    },
  },
});

export const { addNumbers,subNumbers, addNumbersFailed, addNumbersSuccess } =
  calcualatorSlice.actions;

export default calcualatorSlice.reducer;