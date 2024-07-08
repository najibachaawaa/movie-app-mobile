import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const MovieCard = ({ title, imageUrl, description, id }) => {
  return (
    <TouchableOpacity style={styles.cardWrapper}>
      <Image source={{ uri: "imageUrl" }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{"test"}</Text>
        <Text style={styles.cardDescription}>{"description"}</Text>
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
    width: 350,
    backgroundColor: "#fff",
    boxShadow: "0px 6px 17px 0px rgba(0, 0, 0, 0.4)",
    padding: 0,
    overflow: "hidden",
    height: 350,
    margin: 10,
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
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDescription: {
    color: "#555555",
    fontSize: 14,
    marginTop: 8,
  },
});

export default MovieCard;
