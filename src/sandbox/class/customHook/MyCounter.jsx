import { Button, Typography } from "@mui/material";
import React from "react";
import useCounter from "./useCounter";

export default function MyCounter() {
<<<<<<< HEAD
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <div>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={reset}>reset</Button>

      <Typography>{counter}</Typography>
    </div>
=======
  const { counter, increment, decrement, reset } = useCounter(5, 3);
  return (
    <>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={reset}>reset</Button>
      <Typography>{counter}</Typography>
    </>
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
  );
}
