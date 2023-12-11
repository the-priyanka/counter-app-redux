import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
