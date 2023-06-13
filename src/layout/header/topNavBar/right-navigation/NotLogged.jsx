import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import ROUTES from "../../../../routes/routesModel";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { useNavigate } from "react-router-dom";

export default function NotLogged() {
  const navigate = useNavigate();
  /* 
/////////my homework for dropDown menu/////////

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }; */
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

        {/* my homework for dropDown menu */}
        {/*  <GuestMenu anchorEl={anchorEl} open={open} handleClose={handleClose} /> */}
      </Box>
    </>
  );
}

/* lesson */
/* import React from "react";
import Box from "@mui/material/Box";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
const NotLogged = () => {
  return (<Box><NavItem label="Signup" to={ROUTES.SIGNUP} />
  <NavItem label="Login" to={ROUTES.LOGIN} /></Box>);
};
export default NotLogged; */
