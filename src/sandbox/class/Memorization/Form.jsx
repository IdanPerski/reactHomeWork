import { Box, Button, Input, TextField, Typography } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import React, { useState } from "react";
import FormButton from "./FormButton";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const initialForm = {
    firstName: "",
    lastName: "",
  };

  const [data, setData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  console.log("Current State:", data);

  const resetForm = () => {
    console.log("Resetting Form...");
    setData(initialForm);
    console.log("Reset State:", data);
  };

  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "0 auto",
          padding: 5,
          border: "solid 1px",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Typography>First name</Typography>
        <TextField
          sx={{ border: "solid 1px" }}
          name="firstName"
          onChange={handleChange}
          value={data.firstName}
        />
        <Typography>Last name</Typography>
        <TextField
          sx={{ border: "solid 1px" }}
          name="lastName"
          onChange={handleChange}
          value={data.lastName}
        />
        <FormButton onClick={resetForm}>
          <LoopIcon />
          reset
        </FormButton>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: 1, color: red[700] }}
          onClick={() => {
            navigate("/");
          }}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
}
