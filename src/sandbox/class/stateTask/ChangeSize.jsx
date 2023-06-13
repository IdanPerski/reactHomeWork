import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import { width } from "@mui/system";
import React, { useState } from "react";

export default function ChangeSize() {
  const [border, setBorder] = useState(0);
  return (
    <div>
      <Box
        sx={{
          width: 100,
          height: "100px",
          border: `${border}px black solid `,
          backgroundColor: red[300],
        }}
      ></Box>

      <input type="range" onChange={(e) => setBorder(e.target.value)} />
    </div>
  );
}
