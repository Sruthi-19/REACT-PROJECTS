import React, { createContext, useState } from "react";
import Bcomp from "./Bcomp";

export const contextElem = createContext(null);
const ProviderElem = contextElem.Provider;

const Acomp = () => {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  return (
    <>
      <h1>A COMP</h1>
      <label>NAME:</label>
      <input onChange={(e) => setInput(e.target.value)}></input>
      <label>CITY:</label>
      <input onChange={(e) => setCity(e.target.value)}></input>

      <ProviderElem value={[input,city]}>
        <Bcomp />
      </ProviderElem>
    </>
  );
};

export default Acomp;
