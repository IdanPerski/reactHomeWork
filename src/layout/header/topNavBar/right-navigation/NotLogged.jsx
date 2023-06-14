import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import ROUTES from "../../../../routes/routesModel";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { useNavigate } from "react-router-dom";

export default function NotLogged() {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Tooltip title="Signup">
          <IconButton onClick={() => navigate(ROUTES.SIGNUP)}>
            <AppRegistrationIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Login">
          <IconButton onClick={() => navigate(ROUTES.LOGIN)}>
            <LoginIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
}
