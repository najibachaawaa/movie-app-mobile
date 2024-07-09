import { Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMovieContext } from "../contexts/MovieContext";

const DetailsScreen = () => {
  const { selectedMovie } = useMovieContext();

  if (!selectedMovie) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  const { Poster, Title, Year, Plot, Director } = selectedMovie;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {" "}
        {Title}-{Year}
      </Text>
      <Image source={{ uri: Poster }} style={styles.image} />
      <Text style={styles.plot}>{Direcotr}</Text>
      <Text style={styles.plot}>{Plot}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
    height: 500,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    marginBottom: 20,
  },
  year: {
    fontSize: 18,
    color: "#888",
  },
  plot: {
    fontSize: 16,
    marginVertical: 8,
  },
});

export default DetailsScreen;
