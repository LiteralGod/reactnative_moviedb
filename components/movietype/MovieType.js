import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, SectionList } from "react-native-web";
import {API_KEY} from "@env"


export default function MovieType({ navigation, route } ) {

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
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
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
  item: {
    backgroundColor: "#EEE",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
