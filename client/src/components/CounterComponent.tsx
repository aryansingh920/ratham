import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootAppState } from "../redux/reducers"; // Import the RootAppState type correctly

const CounterComponent: React.FC = () => {
  const counter = useSelector((state: RootAppState) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
