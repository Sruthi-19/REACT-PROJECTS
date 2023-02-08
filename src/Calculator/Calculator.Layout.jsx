import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumbers, subNumbers } from "./Calculator.Slice";

const Calcuator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const { result, isFetching } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  console.log("COMP RES AND FETCH", { result, isFetching });

  const onAddNumbers = () => {
    if (!num1 || !num2) {
      return alert("Please enter a valid numbers");
    }
    dispatch(addNumbers({ num1, num2 }));
  };
  
  const onSubNumbers = () => {
    if (!num1 || !num2) {
      return alert("Please enter a valid numbers");
    }
    dispatch(subNumbers({ num1, num2 }));
  };

  return (
    <>
      <p>{isFetching ? "Please wait" : result}</p>
      <div>
        <input
          type="number"
          value={num1}
          placeholder="Enter first number"
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          value={num2}
          placeholder="Enter second number"
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onAddNumbers}>Add Number</button>
        <button onClick={onSubNumbers}>Sub Number</button>
      </div>
    </>
  );
};

export default Calcuator;
