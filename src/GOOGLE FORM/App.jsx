import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Preview from "./Preview";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [val, setVal] = useState({});
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home items={items} setItems={setItems} val={val} setVal={setVal} />} />
          <Route exact path="/preview" element={<Preview items={items} val={val} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
