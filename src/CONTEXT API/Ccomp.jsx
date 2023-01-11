import React, { useContext } from "react";
import { contextElem } from "./Acomp";

const Ccomp = () => {
  const input = useContext(contextElem);

  return (
    <>
      <h1>C COMP</h1>
      <h2>{input}</h2>
    </>
  );
};

export default Ccomp;
