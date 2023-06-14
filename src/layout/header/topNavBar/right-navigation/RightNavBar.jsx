import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";

import { useTheme } from "../../../../providers/ThemeProvider";
import { Box } from "@mui/system";
import NotLogged from "./NotLogged";
import Logged from "./Logged";
import { useUser } from "../../../../user/providers/UseProvider";
import MoreButton from "./MoreButton";

import SearchBar from "./SearchBar";

export default function RightNavBar() {
  const { isDark, toggleDarkMode } = useTheme();
  const { user } = useUser();

  return (
    <>
      <Box display={"inline-flex"}>
        <SearchBar />
        <Box
          sx={{
            display: { xs: "none", md: "inline-flex" },
            alignItems: "center",
          }}
        >
          <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          {user && <Logged />}
          {!user && <NotLogged />}
        </Box>
        <MoreButton />
      </Box>
    </>
  );
}
