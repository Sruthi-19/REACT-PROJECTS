import React from "react";
import { Link } from "react-router-dom";

const About = ({ currentUser, displayFollowers }) => {
  return (
    <>
      {currentUser.hasOwnProperty("bio") ? (
        <>
          <h1>ABOUT</h1>
          <div>
            <img src={currentUser.avatar_url}></img>
            <p>Name: {currentUser.name}</p>
            <p>Id: {currentUser.login}</p>
            <p>Twitter Username: {currentUser.twitter_username}</p>
            <p>Company: {currentUser.company}</p>
            <p>Location: {currentUser.location}</p>
            <p>Bio: {currentUser.bio}</p>
            <p>
              Followers:{" "}
              <Link
                to={`/followers`}
                onClick={() => displayFollowers(currentUser.login)}
              >
                {currentUser.followers}
              </Link>
            </p>
            <p>Following: {currentUser.following}</p>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default About;
