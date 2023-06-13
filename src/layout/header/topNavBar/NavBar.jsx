import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import { MenuProvider } from "./menu class/menu/MenuProvider";
import RightNavBar from "./right-navigation/RightNavBar";
import { useTheme } from "../../../providers/ThemeProvider";

export default function NavBar() {
  const { isDark } = useTheme();

  return (
    <MenuProvider>
      <AppBar position="sticky" color="primary" elevation={10}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <LeftNavBar sx={{ color: isDark ? "white" : "black" }} />

          <RightNavBar sx={{ color: isDark ? "white" : "black" }} />
        </Toolbar>
      </AppBar>
    </MenuProvider>
  );
}
