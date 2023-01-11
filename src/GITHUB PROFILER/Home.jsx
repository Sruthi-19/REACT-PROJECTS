import React, { useEffect, useState } from "react";
import "./githubcss.css";
import { Link, useSearchParams } from "react-router-dom";

const Home = ({
  input,
  setInput,
  userName,
  setUserName,
  repoList,
  setRepoList,
  searchButton
}) => {
  return (
    <div id="home-page">
      <h1>Search for a GitHub user!</h1>

      <input
        placeholder="enter username"
        onChange={(e) => setInput(e.target.value)}
      ></input>

      <Link to={`/profile-repo/${input}`}>
        <button onClick={searchButton}>Search</button>
      </Link>
    </div>
  );
};

export default Home;
