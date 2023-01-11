import React from "react";
import { Link } from "react-router-dom";


const Home=()=>{
    return(
        <>
        <h1>HOME COMPONENT</h1>
        <Link to="/about">ABOUT</Link>
        </>
    )
}

export default Home