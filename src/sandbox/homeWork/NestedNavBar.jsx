import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../routes/components/NavItem";
import ROUTES from "../../routes/routesModel";

export default function NestedNavBar() {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            to={ROUTES.BTN_CMP}
            label="Button componenet"
            sx={{ color: "black" }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
