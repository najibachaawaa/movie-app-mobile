import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMovieContext } from '../contexts/MovieContext';
const MovieCard = ({ title, imageUrl, id }) => {
  const navigation = useNavigation();
  const { handleSelectMovie } = useMovieContext();

  const handlePress = () => {
    handleSelectMovie(id);
    navigation.navigate("MovieDetails");
  };

  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={handlePress}>
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    width: 320,
    backgroundColor: "#fff",
    boxShadow: "0px 6px 17px 0px rgba(0, 0, 0, 0.4)",
    padding: 0,
    overflow: "hidden",
    height: 300,
    margin: 10,
    cursor: "pointer" /* Change the cursor to pointer */,
    transition:
      "transform 0.2s" /* Smooth transition for the transform property */,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDescription: {
    color: "#555555",
    fontSize: 14,
    marginTop: 8,
  },
});

export default MovieCard;
