import {
  Chip,
  CircularProgress,
  Grid,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import DisplayMovie from "./DisplayMovie";

export default function DisplayResult({ result, key }) {
  const { Search } = result;
  console.log(Search, "results array");

  const [selectedMovie, setSelectedMovie] = useState(key);
  const handleSelectMovie = (movieId) => {
    const selectedMovie = Search.find((movie) => movie.imdbID === movieId);
    setSelectedMovie(selectedMovie);
  };

  const [isLoading] = useState(false);

  return (
    <>
      <Paper>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "solid 1px",
                p: 2,
                textAlign: "center",
                shadow: " 1px 2px 10px",
              }}
            >
              <List
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                {Search?.map((movie) => (
                  <ListItem key={movie.imdbID}>
                    <Chip
                      key={movie.imdbID}
                      label={movie.Title}
                      variant="outlined"
                      color="primary"
                      clickable
                      onClick={() => handleSelectMovie(movie.imdbID)}
                      sx={{ margin: "0 auto" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ maxWidth: "100%" }}>
              {isLoading ? (
                <CircularProgress />
              ) : (
                selectedMovie && <DisplayMovie movie={selectedMovie} />
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
