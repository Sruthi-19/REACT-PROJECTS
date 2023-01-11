import React, { useContext, useEffect } from "react";
import { ContextElem } from "./App";
import Welcome from "./Welcome";

const Signin = () => {
  const { handleGoogleSignIn } = useContext(ContextElem);
  const { user } = useContext(ContextElem);
  const {isClick}=useContext(ContextElem);

  return (
    <>
      {user && isClick ? (
        <>
          <Welcome />
        </>
      ) : (
        <div>
          <h1>Sign in</h1>
          <div>
            <button onClick={handleGoogleSignIn}>Sign In</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Signin;
