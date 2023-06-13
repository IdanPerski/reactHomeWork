import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useState } from "react";

export default function Task2() {
  const [open, setOpen] = useState(false);

  const [bgcColor, setBgcColor] = useState();
  let inputBackgroundColor = bgcColor;

  return (
    <>
      <Paper
        sx={{
          width: "20%",
          backgroundColor: blue[100],
          border: "1.3px solid",
          boxShadow: "20px 18px 18px 2px",
          p: 1,
          m: "0 auto",
          display: "flex",
        }}
      >
        <Button
          variant="contained"
          sx={{
            color: blueGrey.A200,
            m: "0 auto",
            border: "solid 1.2px ",
          }}
          onClick={() => setOpen(true)}
        >
          Open simple dialog
        </Button>
      </Paper>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle sx={{ textAlign: "center" }}>
          Lorem ipsum dolor sit
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              width: 550,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            exercitationem sapiente consequatur, ea, ut fugit quaerat aut harum
            hic commodi iste veniam distinctio reprehenderit nemo unde at.
            Minus, maiores eum.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
              console.log("Some Action");
            }}
          >
            Action
          </Button>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Box
        sx={{
          backgroundColor: inputBackgroundColor,
          width: 300,
          height: 200,
          m: "100px auto",
          boxShadow: "20px 8px 25px 2px",
        }}
      >
        <input
          type="color"
          onChange={(event) => {
            inputBackgroundColor = setBgcColor(event.target.value);
          }}
        />
      </Box>
    </>
  );
}
