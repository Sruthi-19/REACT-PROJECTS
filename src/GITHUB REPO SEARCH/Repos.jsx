import React, { useState } from "react";
import RepoDescription from "./RepoDescription";
import "./github.css";
import { Link } from "react-router-dom";

const Repos = ({ repoList, repoDetails,repoDeatilFunction}) => {
  
  return (
    <div id="repo-overall">
      {repoList.length > 0 ? (
        <>
        <h1>REPOSITORIES</h1>
        <div id="repo-list-overall">
          {repoList.map((item) => {
            return (
              <div id="repo-container">
                <Link to={"repoDetails"}><a id="link-tag" onClick={() => repoDeatilFunction(item)}>{item.name}</a></Link>
              </div>
            );
          })}
        </div>
        </>
      ) : (
        <></>
      )}

      {/* {repoDetails.hasOwnProperty("id") ? (
        <RepoDescription repoDetails={repoDetails} />
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Repos;
