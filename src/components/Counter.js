import React from "react";

const Counter = ({
  value,
  onIncrement,
  onIncrementAsync,
  onDecrement,
  onIncrementIfOdd,
  onCancel,
  onSearch
}) => (
  <div>
    <div>Clicked: {value} times</div>
    <br />
    <button onClick={onIncrement}>+</button>{" "}
    <button onClick={onDecrement}>-</button>{" "}
    <button onClick={onIncrementIfOdd}>Increment if odd</button>{" "}
    <button onClick={onIncrementAsync}>Increment async</button>
    <button onClick={onCancel}>Cancel</button>
    <button onClick={onSearch}>Search</button>
  </div>
);

export default Counter;
