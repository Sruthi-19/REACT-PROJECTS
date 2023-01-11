import React from "react";
import Followers from "./Followers";
import { Outlet, Link } from "react-router-dom";

const CurrentUserInfo = ({
  setSearch,
  setUserName,
  currentUser,
  followers,
  setFollowers,
  displayFollowers,
  displayAbout,
}) => {
  console.log("CURRENT USER", currentUser);

  return (
    <>
      {currentUser.hasOwnProperty("login") ? (
        <div>
          <h1>USER INFO</h1>
          <h2>{currentUser.login}</h2>
          <img
            style={{ width: "150px" }}
            src={currentUser.avatar_url}
          ></img>{" "}
          <br></br>
          <button onClick={() => displayAbout(currentUser.login)}>
            <Link to={"about"}> About</Link>
          </button>
        </div>
      ) : (
        <></>
      )}

      {/* {followers.length>0 ? <Followers followers={followers} followerDetail={followerDetail}/> : <></>} */}
    </>
  );
};

export default CurrentUserInfo;
