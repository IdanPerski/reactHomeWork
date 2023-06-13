import { Button } from "@mui/material";
import React, { memo } from "react";

export default memo(function MyButton({ handleClick, node }) {
  return (
    <div>
      <Button onClick={handleClick}>{node}</Button>
    </div>
  );
});
