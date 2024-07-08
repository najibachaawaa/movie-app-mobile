import "react-native-gesture-handler";

import MovieCard from "./components/MovieCard";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <MovieCard />
    </>
  );
}
