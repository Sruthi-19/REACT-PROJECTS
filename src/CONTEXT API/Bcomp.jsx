import React, { useContext } from "react";
import { contextElem } from "./Acomp";
import Ccomp from "./Ccomp";

const Bcomp = () => {
  const arr = useContext(contextElem);

  //   console.log(obj);

  return (
    <>
      <h1>B COMP</h1>
      <p>My name is: {arr[0]}</p>
      <p>My city is: {arr[1]}</p>
      <Ccomp />
    </>
  );
};

export default Bcomp;
