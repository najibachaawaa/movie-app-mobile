import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchButton = () => {
    //
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
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "60%",
    borderRadius: 10,
  },
});

export default SearchScreen;
