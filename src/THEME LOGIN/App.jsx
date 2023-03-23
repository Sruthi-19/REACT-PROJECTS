import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import "./Style/theme.css";

export const ContextElem = createContext();
const Provider = ContextElem.Provider;

export const App = () => {
  const [theme, setTheme] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addName = (value) => {
    setName(value);
  };

  const addEmail = (value) => {
    setEmail(value);
  };

  const addPassword = (value) => {
    setPassword(value);
  };

  const registerData = () => {
    window.localStorage.setItem(
      "details",
      JSON.stringify({ name, email, password })
    );
  };

  const loginUser = () => {
    let data = JSON.parse(window.localStorage.getItem("details"));
    if (email == data.email && password == data.password) {
      alert("Logged in successfully");
    } else {
      alert("Enter Valid Credentials!");
    }
  };

  const changeTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <Provider
        value={{
          theme,
          setTheme,
          changeTheme,
          addName,
          addEmail,
          addPassword,
          registerData,
          loginUser,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Register />} path="/register" />
            <Route element={<Login />} path="/login" />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};
