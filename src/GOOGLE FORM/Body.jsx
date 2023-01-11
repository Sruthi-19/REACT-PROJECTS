import React from "react";

const Body = ({ items, val, setVal }) => {
  const setValueFunction = (e, itemId) => {
    console.log(itemId);
    setVal((prev) => {
      return { ...prev, [itemId]: e.target.value };
    });
    console.log(val);
  };
  return (
    <>
      <h1>ITEMS RENDER</h1>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.label}</h4>
            <input
              value={val[item.id]}
              onChange={(e) => setValueFunction(e, item.id)}
              type={item.type}
              placeholder={item.placeholder}
            ></input>
          </div>
        );
      })}
    </>
  );
};
export default Body;
