import React from "react";
import { useParams } from "react-router-dom";

const Search = () => {
    let { id1 } = useParams();
  return (
    <>
    <h1>ID: {id1}</h1>
    </>
    // <>
    //   <h1>SEARCH</h1>
    //   {name ? <>
    //   <h2>AND IT IS {name}</h2>
    //   </> : <></>}
    // </>
  );
};

export default Search;
