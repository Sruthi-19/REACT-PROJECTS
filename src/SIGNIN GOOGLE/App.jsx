import { createContext, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Login from "./Login";
import Welcome from "./Welcome";

export const ContextElem = createContext(null);
const ProviderElem = ContextElem.Provider;

function App() {
  const [user] = useAuthState(auth);
  const [isClick, setIsClick] = useState(false);
  console.log(user);

  const handleGoogleSignIn = async () => {
    const result = await AuthContext();
    setIsClick(true);
    if (result) {
      console.log("login");
    } else {
      console.log("err");
    }
  };

//   const clickMemo=useMemo(()=>{
//     con
//   },[isClick])

  return (
    <ProviderElem value={{ handleGoogleSignIn, user ,isClick}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </ProviderElem>
  );
}

export default App;
