import React, { createContext, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home1 from "./Home1";
import About from "./About";
import "./Home.css";

export const contextElem = createContext(null);
const ProviderElem = contextElem.Provider;

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleFunc = () => {
    setIsDark(!isDark);
  };

  // const bgColor = useMemo(() => {
  //   let result = {};
  //   if (dark) {
  //     result.backgroundColor = "brown";
  //     result.color = "pink";
  //   } else {
  //     result.backgroundColor = "pink";
  //     result.color = "brown";
  //   }
  //   return result;
  // }, [dark]);

  // const bgColor = useMemo(() => {
  //   document.querySelector(":root").classList.toggle("light");
  // }, [dark]);

  return (
    <>
      <ProviderElem value={{isDark,toggleFunc}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home1/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ProviderElem>
    </>
  );
};

export default App;
