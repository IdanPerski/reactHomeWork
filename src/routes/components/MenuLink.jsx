import React from "react";
import { string, func } from "prop-types";
import NavBarLink from "./NavBarLink";
import MenuItem from "@mui/material/MenuItem";
import { makeFirstLetterCapital } from "../../layout/header/topNavBar/menu class/utils/algoMethods.js";
import { useTheme } from "../../providers/ThemeProvider";

const MenuLink = ({ text, navigateTo, onClick, styles }) => {
  const { isDark } = useTheme();

  return (
    <NavBarLink to={navigateTo}>
      <MenuItem
        sx={{ ...styles, color: isDark ? "white" : "#000" }}
        onClick={onClick}
      >
        {makeFirstLetterCapital(text)}
      </MenuItem>
    </NavBarLink>
  );
};

MenuLink.propTypes = {
  navigateTo: string.isRequired,
  onClick: func.isRequired,
  text: string.isRequired,
};

MenuLink.defaultProps = {
  styles: {},
};

export default MenuLink;
