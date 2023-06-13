import { Box } from "@mui/system";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";

export default function TodoItem() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "70vw",
          justifyContent: "center",
          m: "0 auto",
        }}
      >
        <Input />
        <FormControlLabel
          label=""
          control={
            <Checkbox
              value=""
              checked={() => {
                console.log("checked");
              }}
              onChange={() => {
                console.log("changed");
              }}
              color="primary"
            />
          }
        />

        <Button variant="text" color="error"></Button>
      </Box>
    </>
  );
}
