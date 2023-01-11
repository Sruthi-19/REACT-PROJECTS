import { useState, useEffect } from "react";
import React from "react";
import Home from "./Home.jsx";
import ProfileRepoList from "./ProfileRepoList";
import {
  BrowserRouter,
  Link,
  Route,
  Router,
  Routes,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import RepoDescription from "./RepoDescription.jsx";
import Followers from "./Followers.jsx";

const App = () => {
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState("");
  const [repoList, setRepoList] = useState([]);
  const [repoDetails, setRepoDetails] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [followers, setFollowers] = useState([]);

  const searchButton = () => {
    if (input.length > 0) {
      setUserName(input);
    } else {
      window.alert("Enter user name");
    }
  };

  const repoDeatilFunction = (item) => {
    setRepoDetails(item);
  };

  const displayFollowers = (name) => {
    fetch(`https://api.github.com/users/${name}/followers`)
      .then((res) => res.json())
      .then((data) => setFollowers(data));
  };

  const followerDetail = (item) => {
    setUserName(item.login);
  };

  useEffect(() => {
    if (userName.length > 0) {
      fetch(`https://api.github.com/users/${userName}/repos`)
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          setRepoList(data);
          setCurrentUser(data[0].owner);
        });
    }
  }, [userName]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              input={input}
              setInput={setInput}
              userName={userName}
              setUserName={setUserName}
              repoList={repoList}
              setRepoList={setRepoList}
              searchButton={searchButton}
            />
          }
        />
        <Route
          path="/profile-repo/:username"
          element={
            <ProfileRepoList
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              displayFollowers={displayFollowers}
              repoList={repoList}
              setRepoList={setRepoList}
              userName={userName}
              repoDeatilFunction={repoDeatilFunction}
            />
          }
        />
        <Route
          path="/repo-details/:id/:id1"
          element={<RepoDescription repoDetails={repoDetails} />}
        />
        <Route
          path="/:id/followers"
          element={
            <Followers
              followers={followers}
              userName={userName}
              followerDetail={followerDetail}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
