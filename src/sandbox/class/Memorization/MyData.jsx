import { Button } from "@mui/material";
import React, { useState } from "react";
import Counter from "../../stateHook/Counter";
import MySpecificData from "./MySpecificData";

export default function MyData() {
  const [counter, setcounter] = useState(0);

  return (
    <div>
      <MySpecificData text={"hello"} />
      <MySpecificData text={"bye"} />

      <Button onClick={() => setcounter((prev) => prev + 1)}>+</Button>
      <Button onClick={() => setcounter((prev) => prev - 1)}>-</Button>

      <MySpecificData text={counter} />
    </div>
  );
}
