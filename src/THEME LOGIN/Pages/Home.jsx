import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextElem } from "../App";
import { Theme } from "../Reusable/Theme";
import "../Style/theme.css";

export const Home = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  const { theme } = useContext(ContextElem);
  const { changeTheme } = useContext(ContextElem);

  return (
    <div className={theme ? "dark" : "light"} style={{ textAlign: "center" }}>
      <h1>Home</h1> <Theme changeTheme={changeTheme} theme={theme} />
      <br /> <br />
      <button onClick={() => navigateTo("/register")}>
        Register
      </button> <br /> <br />
      <button onClick={() => navigateTo("/login")}>Login</button>
    </div>
  );
};
