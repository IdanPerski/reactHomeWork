import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Paper } from "@mui/material";

export default function Show2Countries({ func1, func2 }) {
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");

  return (
    <div>
      <Paper>
        <Box>
          <TextField
            id=""
            label="Country-1"
            value={country1}
            onChange={(event) => setCountry1(event.target.value)}
          />
          <Button variant="outlined" color="primary" onClick={func1}>
            Get
          </Button>
        </Box>
        <Box>
          <TextField
            id=""
            label="Country-2"
            value={country2}
            onChange={(event) => setCountry2(event.target.value)}
          />
          <Button variant="outlined" color="primary" onClick={func2}>
            Get
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
