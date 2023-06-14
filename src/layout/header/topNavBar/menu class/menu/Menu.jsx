import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ROUTES from "../../../../../routes/routesModel";
import { useUser } from "../../../../../user/providers/UseProvider";
import useUsers from "../../../../../user/hooks/useUsers";
import MenuLink from "../../../../../routes/components/MenuLink";
import { Divider, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getUsersFromServer } from "../../../../../user/services/usersApiService";
import { useEffect, useState } from "react";
import { useTheme } from "../../../../../providers/ThemeProvider";

const Menu = ({ isOpen, anchorEl, onClose }) => {
  const { user } = useUser();

  const navigate = useNavigate();

  const { handleLogout } = useUsers();

  const [userName, setUserName] = useState("guest");
  const setName = async (userId) => {
    try {
      const { name } = await getUsersFromServer(userId);
      if (userId) {
        setUserName(`${name.first} ${name.last}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.id);
    }
  }, [user]);

  const onLogout = () => {
    handleLogout();
    onClose();
    navigate(ROUTES.CARDS);
  };
  const { isDark, toggleDarkMode } = useTheme();
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Box>
        <MenuItem sx={{ display: { xs: "block" } }}>Hello {userName}!</MenuItem>
        <Divider />
        <MenuLink
          text="about"
          navigateTo={ROUTES.ABOUT}
          onClick={onClose}
          styles={{ display: { xs: "block", md: "none" } }}
        />
        <MenuLink
          text="cards"
          navigateTo={ROUTES.CARDS}
          onClick={onClose}
          styles={{ display: { xs: "block", md: "none" } }}
        />

        <MenuItem
          onClick={toggleDarkMode}
          styles={{ display: { xs: "block", md: "none" } }}
        >
          Dark mode
        </MenuItem>

        {!user && (
          <>
            <MenuLink
              text="login"
              navigateTo={ROUTES.LOGIN}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
            <MenuLink
              text="signup"
              navigateTo={ROUTES.SIGNUP}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
          </>
        )}
        {user && (
          <>
            {/* <MenuLink
              text="profile"
              navigateTo={ROUTES.USER_PROFILE}
              onClick={onClose}
            /> */}
            <MenuLink
              text="edit account"
              navigateTo={ROUTES.EDIT_USER}
              onClick={onClose}
            />
            {isSmall && (
              <MenuLink
                text="Favorite cards"
                navigateTo={ROUTES.FAV_CARDS}
                onClick={onClose}
              />
            )}
            {isSmall && (
              <MenuLink
                text="My cards"
                navigateTo={ROUTES.MY_CARDS}
                onClick={onClose}
              />
            )}
            {isSmall && (
              <MenuLink
                text="Create card"
                navigateTo={ROUTES.CREATE_CARD}
                onClick={onClose}
              />
            )}
            {isSmall && user.isAdmin && (
              <MenuLink
                text="SandBox"
                navigateTo={ROUTES.SANDBOX}
                onClick={onClose}
              />
            )}

            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </>
        )}
      </Box>
    </MuiMenu>
  );
};

export default Menu;
