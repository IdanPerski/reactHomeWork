import React, { useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
// import { number } from "prop-types";

export default function Task4() {
  const [passwordState, setPassword] = useState("");

  const [rate, setRate] = useState(0);

  const ratePassword = (password) => {
    let score = 0;
    if (password.length >= 6) score++;
    if (password.match(/^(?=.*[a-z])(?=.*[A-Z]).+$/)) score = score + 3;
    if (password.match(/\d+/g)) score = score + 2;
    if (password.match(/[!@#$%]/)) score = score + 5;
    return score;
  };
  return (
    <div>
      <Box>
        <Paper
          sx={{
            backgroundColor: red[300],
            width: 500,
            height: 350,
            m: `20px auto`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              p: 2,
            }}
          >
            <Typography sx={{ p: 2 }}>User Name:</Typography>
            <TextField></TextField>
            <Typography sx={{ p: 2 }}>Password:</Typography>
            <TextField
              onChange={(e) => {
                const password = e.target.value;

                setPassword(passwordState);
                setRate(ratePassword(password));
              }}
            ></TextField>
            <Typography variant="body1" color="initial">
              {rate}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
