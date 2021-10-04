import "./styles.css";
import React from "react";
import useCounter from "./useCounter";
import CounterWithInitialValueZero from "./CounterOne";
export default function App() {
  const [count, increment, decrement, reset] = useCounter(10, 5);

  return (
    <div className="App">
      <h1>Count is {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <p>-----------------------------------------------</p>
      <h3>Coming from CounterOne</h3>
      <CounterWithInitialValueZero />
    </div>
  );
}
