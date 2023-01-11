import React from "react";
import { useEffect } from "react";
import { Link,useParams} from "react-router-dom";
import "./githubcss.css";

const ProfileRepoList = ({
  currentUser,
  setCurrentUser,
  displayFollowers,
  repoList,
  setRepoList,
  userName,
  repoDeatilFunction,
}) => {

  const {username}=useParams();
  // console.log("name is",id);
  // const queryParams = new URLSearchParams(window.location.search);
  // const id = queryParams.get("id");

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepoList(data);
        setCurrentUser(data[0].owner);
      });
  }, []);

  console.log(repoList);

  return (
    <div id="profile-repo-list">
      <div id="profile-repo-sub1">
        <h1 id="h1">Profile</h1>
        {currentUser.hasOwnProperty("login") ? (
          <div id="profile-container">
            <h2>{currentUser.login}</h2>
            <img
              style={{ width: "200px" }}
              src={currentUser.avatar_url}
            ></img>{" "}
            <br></br>
            <button onClick={() => displayAbout(currentUser.login)}>
              About
            </button>
            <Link to={`/${username}/followers`}>
              <button onClick={() => displayFollowers(currentUser.login)}>
                Followers
              </button>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>

      <h1 id="h1">Repositories</h1>
      <div id="profile-repo-sub2">
        {repoList.map((item) => {
          return (
            <>
              <Link
                to={`/repo-details/${userName}/${item.name}`}
                onClick={() => repoDeatilFunction(item)}
              >
                <div id="repo-item">
                  <h4>{item.name}</h4>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileRepoList;
