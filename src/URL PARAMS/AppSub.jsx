import React, { useState } from "react";
import Search from "./Search";
import {Link, useLocation, Routes, Route} from "react-router-dom";

const AppSub=()=>{
    // function useQuery() {
    //     const { search } = useLocation();
      
    //     return React.useMemo(() => new URLSearchParams(search), [search]);
    //   }

    //   let query=useQuery();

      const[input,setInput]=useState("");
    return(
        <>
        <h1>APP COMPONENT</h1>
        <input onChange={(e)=>setInput(e.target.value)}></input>
        {/* <Link to="/netflix">Netflix</Link> */}

        <Link to={`/${input}`}>Input</Link>
        <Routes>
          <Route path="/:id1" element={<Search />} />
        </Routes>
        
        {/* <Link to="/account?name=SRUTHI" >CLICK ME</Link> */}
        {/* <Search name={query.get("name")}/> */}

        </>
    )
}

export default AppSub;