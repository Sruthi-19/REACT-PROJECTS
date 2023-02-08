import React, { useState } from "react";
import { addProduct } from "./Slice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [item, setItem] = useState("");
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
//   console.log("products", products);
  return (
    <>
      <h1>REDUX SAGA</h1>
      <input onChange={(e) => setItem(e.target.value)}></input>
      <button onClick={() => dispatch(addProduct(item))}>ADD PRODUCT</button>
    </>
  );
};

export default Home;
