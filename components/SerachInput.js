import { View, TextInput, Button, StyleSheet } from "react-native";
import { useMovieContext } from "../contexts/MovieContext";

const SearchScreen = () => {
  const { searchQuery, setSearchQuery, handleSearch } = useMovieContext();

  const handleSearchButton = () => {
    handleSearch(searchQuery);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter movie title..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearchButton} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginLeft: "10%",
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default SearchScreen;
