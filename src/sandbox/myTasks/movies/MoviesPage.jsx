import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayResult from "./DisplayResult";
import { getMovies } from "./services/moviesApiService";

export default function MoviesPage() {
  const [movieName, setMovieName] = useState("");
  const [resultMovie, setResultMovie] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    //at this function there is rendering at each typing inside the textField
    console.log("render");
    let { value } = e.target;
    //making sure that each first letter in word is in uppercase
    value = value.replace(/\b\w/g, (match) => match.toUpperCase());
    //making sure that the request will fit to the api with each space will apear "%20"
    if (/\s+/.test(value)) setMovieName(value.replace(/\s/g, "%20"));
    else setMovieName(value);
  };

  const handleClick = async () => {
    try {
      const searchResult = await getMovies(movieName);
      setResultMovie(searchResult);
      console.log(searchResult);
      if (searchResult.Response === "False") return false;
    } catch (error) {
      navigate("/error");
    } finally {
      //reset the movieName state variable to an empty string, which will clear the text field
      setMovieName("");
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "75vw",
          margin: "2rem auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <TextField onChange={handleChange}></TextField>
        <Button variant="outlined" color="primary" onClick={handleClick}>
          Search
        </Button>
      </Box>

      {resultMovie && <DisplayResult result={resultMovie} key={movieName} />}
    </>
  );
}

/*__________ Before refactoring________ */
/*   const handleClick =  () => {
     console.log("render check");
    const movieDataUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`;
    const sendRequest = fetch(movieDataUrl);

    sendRequest
      .then((res) => res.json())
      .then((movie) => {
        console.log(movie.Response);
        if (movie.Response === "False") {
          console.log(movie.Error);

          //   navigate("/error");
        } else {
          setResultMovie(movie);
        }
      })
      .catch((error) => navigate("/error"));

  }; */
