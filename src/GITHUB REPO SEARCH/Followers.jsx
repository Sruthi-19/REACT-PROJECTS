import React from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const Followers = ({
  userName,
  prevUser,
  setFollowers,
  followers,
  followerDetail,
}) => {
  console.log("FOLLOWERS COMP", followers);
  return (
    <>
      <h1>FOLLOWERS:{followers.length}</h1>
      {followers.map((item) => {
        return (
          <div style={{ width: "100%", display: "flex",columnGap:"10px"}}>
            <h6>{item.login}</h6>
            <img style={{ width: "80px" }} src={item.avatar_url}></img>

            <Link to={"/"}>
              <button onClick={() => followerDetail(item)}>About</button>
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default Followers;
