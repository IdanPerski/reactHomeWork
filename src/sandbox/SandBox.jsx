import { AppBar, Button, Container, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavItem from "../routes/components/NavItem";

import NestedNavBar from "./homeWork/NestedNavBar";
import { useTheme } from "../providers/ThemeProvider";

export default function SandBox() {
  const [showNavbar, setShowNavbar] = useState(false);
  const { isDark } = useTheme();
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <div>
      <AppBar
        position="sticky"
        color="transparent"
        sx={{
          zIndex: 1,
        }}
      >
        <Toolbar sx={{ color: isDark ? "white" : "black" }}>
          <NavItem to="counter" label="Counter Page" />
          <NavItem to="mydetails" label="My Details Page" />
          <NavItem to="password" label="Password Page" />
          <NavItem to="todo" label="Todo Page" />
          <NavItem to="firsteffect" label="First Effect Page" />
          <NavItem to="countries" label="countries Page" />
          <NavItem to="render" label="render" />

          <Button onClick={toggleNavbar}>Data Display</Button>
        </Toolbar>
      </AppBar>
      {showNavbar && <NestedNavBar />}
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
