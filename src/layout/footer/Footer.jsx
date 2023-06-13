import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import InfoIcon from "@mui/icons-material/Info";
import Favorite from "@mui/icons-material/Favorite";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useUser } from "../../user/providers/UseProvider";
import StyleIcon from "@mui/icons-material/Style";

export default function Footer() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />

        <BottomNavigationAction
          label="Cards"
          icon={<StyleIcon />}
          onClick={() => navigate(ROUTES.CARDS)}
        />

        {user && (
          <BottomNavigationAction
            label="Favorites Cards"
            icon={<Favorite />}
            onClick={() => navigate(ROUTES.FAV_CARDS)}
          />
        )}

        {user?.isBusiness && (
          <BottomNavigationAction
            label="My-cards"
            icon={<DashboardIcon />}
            onClick={() => navigate(ROUTES.MY_CARDS)}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
}

/* 
export default function Footer() {
  const { user } = useUser();
  const {  isBusiness } = getUser();
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />

        {user && (
          <BottomNavigationAction
            label="Cards"
            icon={<Favorite />}
            onClick={() => navigate(ROUTES.FAV_CARDS)}
          />
        )}

        {isBusiness && (
          <BottomNavigationAction
            label="My-cards"
            icon={<DashboardIcon />}
            onClick={() => navigate(ROUTES.MY_CARDS)}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
}
 */

/* Class */

/* 
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Paper,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import InfoIcon from "@mui/icons-material/Info";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StyleIcon from "@mui/icons-material/Style";
import { useUser } from "../../users/providers/UserProvider";

export default function Footer() {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        <BottomNavigationAction
          label="Cards"
          icon={<StyleIcon />}
          onClick={() => navigate(ROUTES.CARDS)}
        />
        {user?.isBusiness && (
          <BottomNavigationAction
            label="My cards"
            icon={<RecentActorsIcon />}
            onClick={() => navigate(ROUTES.MY_CARDS)}
          />
        )}
        {user && (
          <BottomNavigationAction
            label="Favorite cards"
            icon={<FavoriteIcon />}
            onClick={() => navigate(ROUTES.FAV_CARDS)}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
}



*/
