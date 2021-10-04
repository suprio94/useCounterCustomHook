import { useState } from "react";

function useCounter(initialCounter, value) {
  const [count, setCount] = useState(initialCounter);

  const increment = () => setCount(count + value);
  const decrement = () => setCount(count - value);
  const reset = () => setCount(initialCounter);

  return [count, increment, decrement, reset];
}

export default useCounter;
