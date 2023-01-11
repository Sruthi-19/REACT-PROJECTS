import React, { useContext } from "react";
import { contextElem } from "./App";
import "./Home.css";

const About = () => {
  const { isDark } = useContext(contextElem);
  const { toggleFunc } = useContext(contextElem);

  return (
    <div className={isDark ? "dark" : "light"}>
      https://icons8.com/icon/C1TelaAFdrrO/sun
      <h1>ABOUT PAGE</h1>
      <button
        className={isDark ? "buttonDark" : "buttonLight"}
        onClick={toggleFunc}
      >
        CLICK
      </button>
    </div>
  );
};

export default About;
