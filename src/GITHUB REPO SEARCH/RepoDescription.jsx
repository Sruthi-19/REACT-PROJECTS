import React from "react";

const RepoDescription = ({repoDetails }) => {
  return (
    <>
      <h1>DETAILS</h1>
      <div style={{backgroundColor:"black",color:"white",padding:"20px"}}>
      <p>NAME: {repoDetails.full_name}</p>
      <p>ID: {repoDetails.id}</p>
      <p>VISIBILITY: {repoDetails.visibility}</p>
      <p>URL: <a href={repoDetails.url}>{repoDetails.url}</a></p>
      <p>LANGUAGES URL: {repoDetails.languages_url}</p>
      <p>DESCRIPTION: {repoDetails.description}</p>
      </div>
    </>
  );
};

export default RepoDescription;
