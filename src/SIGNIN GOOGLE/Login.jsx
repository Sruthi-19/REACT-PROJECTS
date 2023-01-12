import React, { useContext, useEffect } from "react";
import "./Firebase.css";
import { ContextElem } from "./App";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";

const Login = () => {
  const { handleGoogleLogin } = useContext(ContextElem);
  const { user } = useContext(ContextElem);

  return (
    <>
      {user ? (
        <>
          <Welcome />
        </>
      ) : (
        <div id="login-page">
          <h1>You need to login first</h1>
          
          <Link to="/welcome">
            <button onClick={handleGoogleLogin}>Login</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Login;
