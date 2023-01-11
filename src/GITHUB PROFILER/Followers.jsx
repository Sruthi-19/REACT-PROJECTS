import React from "react";
import { Link } from "react-router-dom";

const Followers = ({ followers, userName, followerDetail }) => {
  return (
    <>
      {followers.map((item) => {
        return (
          <div style={{ width: "100%", display: "flex", columnGap: "10px" }}>
            <h6>{item.login}</h6>
            <img style={{ width: "80px" }} src={item.avatar_url}></img>

            <Link to={`/profile-repo/${userName}`}>
              <button onClick={() => followerDetail(item)}>About</button>
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default Followers;
