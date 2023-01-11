import React from "react";
import { v4 } from "uuid";

const Header = ({
  label,
  setLabel,
  type,
  setType,
  placeholder,
  setPlaceholder,
  items,
  setItems,
}) => {
  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: v4(),
        label: label,
        type: type,
        placeholder: placeholder,
      },
    ]);
    setLabel("");
    setPlaceholder("");
    setType("");
  };
  return (
    <>
      <h1> Create a Form</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        ></input>
        <select onChange={(e) => setType(e.target.value)}>
          <option>Input Type</option>
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="password">Password</option>
          <option value="date">Date</option>
          <option value="tel">Phone</option>
        </select>
        <input
          type="text"
          placeholder="Enter a placeholder value for input box"
          value={placeholder}
          onChange={(e) => setPlaceholder(e.target.value)}
        ></input>
        <button onClick={addItem}>Create Input</button>
      </div>
    </>
  );
};
export default Header;
