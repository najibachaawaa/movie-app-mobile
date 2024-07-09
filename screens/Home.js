import { View, FlatList, StyleSheet } from "react-native";
import MovieCard from "../components/MovieCard";
import SearchScreen from "../components/SerachInput";
import { useMovieContext } from "../contexts/MovieContext";

const Home = () => {
  const { movies } = useMovieContext();

  return (
    <View style={styles.container}>
      <SearchScreen />
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard
            title={item.Title}
            imageUrl={item.Poster}
            id={item.imdbID}
          />
        )}
        keyExtractor={(item) => item.imdbID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default Home;
