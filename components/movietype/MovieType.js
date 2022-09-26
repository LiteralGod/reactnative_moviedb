import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, SafeAreaView, SectionList } from "react-native-web";
import { API_KEY } from "@env";

export default function MovieType({ navigation, route }) {
  const [data, setData] = useState([]);

  const { movieType } = route.params;

  useEffect(() => {
    console.log(process.env);
    fetchMovies();
  }, []);

 
  function fetchMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieType}?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }

  
  const renderItem = ({ item }) => (
    <Item navigation={navigation} movieId={item.id} title={item.title} />
  );

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
        navigation.navigate("Specifics", {
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
