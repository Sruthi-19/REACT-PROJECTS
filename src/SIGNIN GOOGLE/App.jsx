import { createContext, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./Firebase";
import { SignOut } from "./Firebase";
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Home from "./Home";
import Login from "./Login";
import Welcome from "./Welcome";

export const ContextElem = createContext(null);
const ProviderElem = ContextElem.Provider;

function App() {
  const [user] = useAuthState(auth);
  const [isClick, setIsClick] = useState(false);
  console.log("user", user);

  const handleGoogleLogin = async () => {
    const result = await AuthContext();
    setIsClick(!isClick);
    if (result) {
      console.log("login");
    } else {
      console.log("err");
    }
  };

  const handleGoogleLogout = () => {
    SignOut();
  };

  return (
    <ProviderElem
      value={{ handleGoogleLogin, handleGoogleLogout, user, isClick }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </ProviderElem>
  );
}

export default App;
