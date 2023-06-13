import axios from "axios";

export const getMovies = async (movieName) => {
  const apiKey = "6d5f2306";
  const movieDataUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`;

  console.log("getMovies funcion is on");
  try {
    const { data } = await axios.get(movieDataUrl);

    return data;
  } catch {
    console.log("error");
    return Promise.reject();
  }
};
