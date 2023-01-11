import React from "react";
import { useNavigate } from "react-router-dom";


const Submit = () => {
  const navigate = useNavigate();
  const submitFunction = () => {
    navigate("/preview");
  };
  return (
    <>
      <button onClick={submitFunction}>SUBMIT</button> 
    </>
  );
};
export default Submit;
