
import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const OMDB_API_KEY = "25fdf932";
  const OMDB_API_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;

  useEffect(() => {
    fetchMovies("all");
  }, []);

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(`${OMDB_API_URL}&s=${query}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchMovies(query);
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
        setSearchResults,
        handleSearch,
        handleSelectMovie,
        selectedMovie,
        movies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
