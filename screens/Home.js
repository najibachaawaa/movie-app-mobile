import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from the API
    fetch('http://www.omdbapi.com/?s=star&apikey=25fdf932')
      .then(response => response.json())
      .then(data => setMovies(data.Search));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard
            title={item.Title}
            imageUrl={item.Poster}
                      id={item.imdbID}
          />
        )}
        keyExtractor={item => item.imdbID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default Home;