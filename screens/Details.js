import { useEffect, useState } from "react";
import { Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailsScreen = ({ route }) => {
  const { id } = route.params;
  const [movie, setmovie] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=25fdf932`)
      .then((response) => response.json())
      .then((data) => setmovie(data));
  }, [id]);

  if (!movie) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  const { Poster, Title, Year, Plot } = movie;
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: Poster }} style={styles.image} />
      <Text style={styles.title}>
        {Title}-{Year}
      </Text>

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
    height:500,
    border:"solid red" 
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
