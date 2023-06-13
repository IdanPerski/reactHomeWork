import { Menu, MenuItem, MenuList } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../../routes/routesModel";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function GuestMenu({ anchorEl, open, handleClose }) {
  const navigate = useNavigate();

  const handleMenuItemClick = (route) => {
    navigate(route);
    handleClose();
  };

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuList>
        <MenuItem onClick={() => handleMenuItemClick(ROUTES.CARDS)}>
          Cards
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick(ROUTES.ABOUT)}>
          About
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
