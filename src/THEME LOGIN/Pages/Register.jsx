import React, { useContext } from "react";
import { ContextElem } from "../App";
import { Email, Name, Password, SubmitButton } from "../Reusable/Form";
import { Theme } from "../Reusable/Theme";
import "../Style/theme.css";

export const Register = () => {
  const { theme } = useContext(ContextElem);
  const { changeTheme } = useContext(ContextElem);
  const { addName } = useContext(ContextElem);
  const { addEmail } = useContext(ContextElem);
  const { addPassword } = useContext(ContextElem);
  const { registerData } = useContext(ContextElem);

  return (
    <div className={theme ? "dark" : "light"}>
      <h1>Registration Page</h1>
      <Theme changeTheme={changeTheme} theme={theme} />
      <br /> <br />
      <Name placeholder="Enter Name" onChange={addName} /> <br /> <br />
      <Email placeholder="Enter Email" type="email" onChange={addEmail} />
      <br /> <br />
      <Password
        placeholder="Enter Password"
        type="password"
        onChange={addPassword}
      />
      <br /> <br />
      <SubmitButton name="Register" onClick={registerData} />
    </div>
  );
};
