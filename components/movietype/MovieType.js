import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, SafeAreaView, SectionList } from "react-native-web";
import { API_KEY } from "@env";

export default function MovieType({ navigation, route }) {
  const [data, setData] = useState([]);

  const { movieType } = route.params;

  // Fetch movie list when component is mounted
  useEffect(() => {
    console.log(process.env);
    fetchMovies();
  }, []);

  // Function to fetch movie list
  function fetchMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieType}?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }

  // Render function that returns the Item component
  const renderItem = ({ item }) => (
    <Item navigation={navigation} movieId={item.id} title={item.title} />
  );

  // returns a flatlist because we only need to render what the user can see.
  // Else it would be too heavy when we load alot of movies.
  return (
    <SafeAreaView>
      <Text style={styles.text}>List of {movieType} movies</Text>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const Item = ({ navigation, title, movieId }) => (
  <View style={styles.item}>
    <Text
      onPress={() =>
        navigation.navigate("Details", {
          movieId,
        })
      }
      style={styles.title}
    >
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 25,
  },
  item: {
    backgroundColor: "#2196f3",
    justifyContent: "center",
    marginVertical: "0.5%",
    marginHorizontal: "38%",
  },
  title: {
    fontSize: 25,
    color: "white",
  },
});
