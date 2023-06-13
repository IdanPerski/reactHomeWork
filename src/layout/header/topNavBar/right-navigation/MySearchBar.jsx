import { Box, IconButton, InputBase } from "@mui/material";
import React, { useContext, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import useCards from "../../../../cards/hooks/useCards";
import { SearchContext } from "../../../../providers/SearchProvider";

export default function SearchBar() {
  const {
    value: { cards },
    handleGetCards,
    handleGetFavCards,
    handleDeleteCard,
  } = useCards();

  const { handleSearch, search, renderNoResult, setRenderNoresult } =
    useContext(SearchContext);

  useEffect(() => {
    handleGetCards();
  }, []);

  const getSearchResult = (value, SearchKey) => {
    handleSearch(value, SearchKey, cards);
    search.length > 0 ? setRenderNoresult(false) : setRenderNoresult(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <InputBase
        sx={{
          flex: 1,
          border: "white solid 1px",
          maxWidth: "170px",
          maxHeight: "38px",
          marginY: "auto",
        }}
        placeholder=" Search "
        inputProps={{ "aria-label": "search " }}
        onChange={(e) => {
          const value = e.target.value;
          getSearchResult(value, "title");
        }}
      />
      {
        <IconButton
          type="button"
          sx={{ p: "10px", color: "black", marginY: "auto" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      }
    </Box>
  );
}
