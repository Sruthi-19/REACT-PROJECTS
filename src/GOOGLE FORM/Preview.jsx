import React from "react";
import { useNavigate } from "react-router-dom";

const Preview = ({items,val}) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>PREVIEW</h1>
        {items.map((item) => {
          return (
            <div style={{display:"flex"}} key={item.id}>
              <h4>{item.label}: </h4>
              <h4>{val[item.id]}</h4>
            </div>
          );
        })}
      </div>
      <button onClick={() => navigate("/home")}>Go Back Home</button>
    </>
  );
};

export default Preview;
