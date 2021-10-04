import React from "react";
import useCounter from "./useCounter";

function CounterWithInitialValueZero() {
  const [count, increment, decrement, reset] = useCounter(0, 2);
  return (
    <>
      <h1>Count is {count} </h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default CounterWithInitialValueZero;
