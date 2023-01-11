import React, { useEffect, useState } from "react";
import CurrentUserInfo from "./UserInfo";
import Repos from "./Repos";
import { Link, useNavigate } from "react-router-dom";

const Home = ({search,setSearch,userName,setUserName,repoList,setRepoList,currentUser,setCurrentUser,followers,setFollowers,repoDetails,setRepoDetails,searchUser,displayFollowers,repoDeatilFunction,followerDetail,displayAbout}) => {
  let navigate=useNavigate();

  return (
    <>
      <h1>GitHub Repo Search</h1>
      <input
        placeholder="enter github user name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button onClick={() => searchUser(search)}>Search</button>

      <CurrentUserInfo
        setSearch={setSearch}
        setUserName={setUserName}
        currentUser={currentUser}
        followers={followers}
        setFollowers={setFollowers}
        displayFollowers={displayFollowers}
        displayAbout={displayAbout}
      />

      <Repos
        repoList={repoList}
        repoDetails={repoDetails}
        repoDeatilFunction={repoDeatilFunction}
      />
    </>
  );
};
export default Home;
