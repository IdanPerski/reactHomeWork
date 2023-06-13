import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";
import { useUser } from "../../../../user/providers/UseProvider";
import { Box, useMediaQuery } from "@mui/material";

export default function LeftNavBar() {
  const { user } = useUser();

  const isMedium = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <LogoIcon />
        {isMedium && <Logo />}

        {isMedium && (
          <Box sx={{ display: "flex" }}>
            <NavItem to={ROUTES.CARDS} label="Cards" />
            <NavItem to={ROUTES.ABOUT} label="About" />
            {user && <NavItem to={ROUTES.FAV_CARDS} label="Favorite cards" />}

            {user?.isBusiness && (
              <NavItem to={ROUTES.MY_CARDS} label="My cards" />
            )}
            {user?.isAdmin && <NavItem to={ROUTES.SANDBOX} label="Sandbox" />}
            {user?.isAdmin && (
              <NavItem to={ROUTES.CREATE_CARD} label="Create Card" />
            )}
          </Box>
        )}
      </Box>
    </>
  );
}
