import { Typography } from "@mui/material";
import React from "react";
import Cart from "./Cart";
import Products from "./Products";

const Home = () => {
  return (
    <div style={{backgroundColor:"pink"}}>
      <h1 style={{textAlign:"center"}}>Home Page</h1>
      <div style={{ display: "flex", justifyContent:"space-between", columnGap:"20px", marginTop:"30px"}}>
        <div style={{marginLeft:"20px"}}>
          <Products />
        </div>
        <div style={{width:"55%", marginRight:"20px"}}>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Home;
