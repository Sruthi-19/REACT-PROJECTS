import { Switch, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

export const Theme = ({ changeTheme, theme }) => {
  return (
    <>
      {/* <select
        onChange={changeTheme}
        defaultValue={value == "light" ? "light" : "dark"}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select> */}
      <Switch onChange={changeTheme} defaultChecked={theme} />
    </>
  );
};
