import { createContext, useState, useContext } from "react";
import axios from "axios";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const OMDB_API_KEY = "25fdf932"; // Replace with your actual API key
  const OMDB_API_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`${OMDB_API_URL}&s=${query}`);
      setSearchResults(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setSearchResults([]);
    }
  };

  const handleSelectMovie = async (movieId) => {
    try {
      const response = await axios.get(`${OMDB_API_URL}&i=${movieId}`);
      setSelectedMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setSelectedMovie(null);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        setSelectedMovie,
        handleSearch,
        handleSelectMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
