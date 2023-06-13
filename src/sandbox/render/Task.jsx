import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Task({ children, func }) {
  const [text, setText] = useState("");
  const handelClick = () => setText((prev) => prev + 1);
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={func}>
        {children}
      </Button>
    </div>
  );
}
