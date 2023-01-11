import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { contextElem } from "./App";

const Home1 = () => {
  const { isDark } = useContext(contextElem);
  const { toggleFunc } = useContext(contextElem);

  return (
    <div className={isDark ? "dark" : "light"}>
      <h1>HOME PAGE</h1>
      <Link to="about">ABOUT</Link>
      <button
        className={isDark ? "buttonDark" : "buttonLight"}
        onClick={toggleFunc}
      >
        <span className="material-symbols-outlined">
          {isDark ? "light_mode" : "dark_mode"}
        </span>
        {isDark ? "LIGHT" : "DARK"}
      </button>
    </div>
  );
};

export default Home1;
