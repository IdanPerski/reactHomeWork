import { useState } from "react";

export default function useCounter(initialValue = 0, step = 1) {
  const [counter, setCounter] = useState(initialValue);
<<<<<<< HEAD
  const increment = () => setCounter((prev) => prev + step);
  const decrement = () => setCounter((prev) => prev - step);
  const reset = () => setCounter(initialValue);

=======
  const increment = () => {
    setCounter((prev) => prev + step);
  };
  const decrement = () => {
    setCounter((prev) => prev - step);
  };
  const reset = () => {
    setCounter(initialValue);
  };
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  return { counter, increment, decrement, reset };
}
