import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import Submit from "./Submit";

const Home = ({items,setItems,val,setVal}) => {
  const [label, setLabel] = useState("");
  const [type, setType] = useState("");
  const [placeholder, setPlaceholder] = useState("");

//   const [visible, setVisible] = useState(false);
//   const navigate = useNavigate();

const handleNav=()=>{
    return <ReturnComp/>
}

  return (
    <div>
      <h1>FORM</h1>
      <Header
        label={label}
        setLabel={setLabel}
        type={type}
        setType={setType}
        placeholder={placeholder}
        setPlaceholder={setPlaceholder}
        items={items}
        setItems={setItems}
      />
      <Body items={items} val={val} setVal={setVal} />
      <Submit
        // visible={visible}
        // setVisible={setVisible}
        items={items}
        val={val}
      />
    </div>
  );
};

export default Home;
