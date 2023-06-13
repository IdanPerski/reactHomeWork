import { Box, FormControl, OutlinedInput } from "@mui/material";
import React from "react";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const { isDark } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams("");

  const handleChange = ({ target }) => setSearchParams({ q: target.value });
  return (
    <Box sx={{ display: "flex" }}>
      <FormControl variant="standard">
        <OutlinedInput
          sx={{
            backgroundColor: isDark ? "#8333333" : "#e3f2fd",
            flex: 1,
            border: "white solid 1px",
            maxWidth: "170px",
            maxHeight: "38px",
            marginY: "auto",
          }}
          placeholder="Search"
          size="small"
          value={searchParams.get("q") ?? ""}
          onChange={handleChange}
        />
      </FormControl>
    </Box>
  );
}
