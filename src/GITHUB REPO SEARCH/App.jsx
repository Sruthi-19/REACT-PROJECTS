import Home from "./Home";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Followers from "./Followers";
import RepoDescription from "./RepoDescription";
import About from "./About";

const App = () => {
  const [search, setSearch] = useState("");
  const [userName, setUserName] = useState("");

  const [repoList, setRepoList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const [followers, setFollowers] = useState([]);
  const [repoDetails, setRepoDetails] = useState({});

  const [prevUser, setPrevUser] = useState("");

  //SEARCH BUTTON FUNCTIONALITY ONCLICK SEARCH BUTTON
  const searchUser = (search) => {
    if (search.length > 0) {
      setUserName(search);
    } else {
      window.alert("Enter user name");
    }
  };

  //FOLLOWER BUTTON FUNCTIONALITY TO DISPLAY LIST OF FOLLOWERS

  const displayFollowers = (name) => {
    fetch(`https://api.github.com/users/${name}/followers`)
      .then((res) => res.json())
      .then((data) => setFollowers(data));
  };

  const displayAbout = (name) => {
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  };

  console.log("ABOUT", currentUser);

  //REPO LINK CLICK DISPLAY DETAILS
  const repoDeatilFunction = (item) => {
    setRepoDetails(item);
  };

  const followerDetail = (item) => {
    setPrevUser(userName);
    setSearch("");
    setUserName(item.login);
    // setFollowers([]);
    // setRepoDetails({});
  };

  useEffect(() => {
    if (userName.length > 0) {
      fetch(`https://api.github.com/users/${userName}/repos`)
        .then((res) => res.json())
        .then((data) => {
          setRepoList(data);
          setCurrentUser(data[0].owner);
          setFollowers([]);
        });
    }
  }, [userName]);

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                setSearch={setSearch}
                userName={userName}
                setUserName={setUserName}
                repoList={repoList}
                setRepoList={setRepoList}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                followers={followers}
                setFollowers={setFollowers}
                repoDetails={repoDetails}
                setRepoDetails={setRepoDetails}
                searchUser={searchUser}
                displayFollowers={displayFollowers}
                repoDeatilFunction={repoDeatilFunction}
                followerDetail={followerDetail}
                displayAbout={displayAbout}
              />
            }
          />
          <Route
            exact
            path={`/followers`}
            element={
              <Followers
                userName={userName}
                prevUser={prevUser}
                setFollowers={setFollowers}
                followers={followers}
                followerDetail={followerDetail}
              />
            }
          />
          <Route
            path="repoDetails"
            element={<RepoDescription repoDetails={repoDetails} />}
          />
          <Route
            path="about"
            element={
              <About
                currentUser={currentUser}
                displayFollowers={displayFollowers}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
