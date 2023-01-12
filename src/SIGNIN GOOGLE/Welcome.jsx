import React, { useContext } from "react";
import "./Firebase.css";
import { Link } from "react-router-dom";
import { ContextElem } from "./App";

const Welcome = () => {
  const { handleGoogleLogout } = useContext(ContextElem);
  const { user } = useContext(ContextElem);
  console.log("welcome user", user);

  return (
    <>
      {user ? (
        <div id="welcome-page">
          <h1>Welcome {user.displayName}</h1>
          <div id="welcome-container">
            <img src={user.photoURL}></img>
            <div id="welcome-container-sub">
              <p>Name: {user.displayName}</p>
              <p>Email: {user.email}</p>
              <Link to="/">
                <button onClick={handleGoogleLogout}>Logout</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1>LOADING</h1>
        </>
      )}
    </>
  );
};

export default Welcome;
