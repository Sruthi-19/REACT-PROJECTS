import React from "react";
import "./Firebase.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextElem } from "./App";

const Home = () => {
  const { user } = useContext(ContextElem);
  return (
    <div id="home-page">
      {user ? (
        <>
          <Link to="/welcome">
            <button>PROCEED</button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">
            <button>PROCEED</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Home;
