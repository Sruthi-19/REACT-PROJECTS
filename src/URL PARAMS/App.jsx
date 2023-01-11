import React from "react";
import AppSub from "./AppSub";
import {BrowserRouter, Link, Router, useLocation} from "react-router-dom";

const App=()=>{
    return(
        <>
        <BrowserRouter>
            <AppSub/>
        </BrowserRouter>
        </>
    )
}

export default App;