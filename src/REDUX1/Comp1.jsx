import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./slice";
import { counterSlice } from "./slice";

const Comp1 = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>{counterSlice.name}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Comp1;
