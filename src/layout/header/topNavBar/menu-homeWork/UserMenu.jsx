import {
  Menu,
  MenuItem,
  MenuList,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../../routes/routesModel";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function UserMenu({ anchorEl, open, handleClose }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("sm");
  const isMedium = useMediaQuery("md");
  const isLarge = useMediaQuery("lg");

  const navigate = useNavigate();
  const handleMenuItemClick = (route) => {
    navigate(route);
    handleClose();
  };
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose} keepMounted>
      <MenuList>
        <MenuItem onClick={() => handleMenuItemClick(ROUTES.MY_CARDS)}>
          Profile
        </MenuItem>
        <MenuItem onClick={() => console.log("account")}>Edit account</MenuItem>
        <MenuItem onClick={() => console.log("Logout")}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
