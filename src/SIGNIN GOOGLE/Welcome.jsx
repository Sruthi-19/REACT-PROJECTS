import React, { useContext } from "react";
import { ContextElem } from "./App";

const Welcome=()=>{
    const {user}=useContext(ContextElem)
    return(
        <>
        <h1>Welcome {user.displayName}</h1>
        </>
    )
}

export default Welcome