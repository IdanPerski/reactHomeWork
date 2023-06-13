import { Container, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export default function ChooseColor() {
  const [bgcColor, setbgcColor] = useState("black");
  return (
    <div>
      <Container>
        <Box
          sx={{
            width: "100px",
            height: "100px",
            backgroundColor: bgcColor,
          }}
        ></Box>

        <Button variant="outlined" color="primary" onc>
          Yellow
        </Button>
        <Button variant="outlined" color="primary">
          red
        </Button>
        <Button variant="outlined" color="primary">
          green
        </Button>
      </Container>
    </div>
  );
}
