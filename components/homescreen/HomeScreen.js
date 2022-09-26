import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { FlatList, SectionList } from "react-native-web";
import { API_KEY } from "@env";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Welcome to BestMovieDB</Text>
      <Text style={styles.text}>What movies do you wanna see?</Text>
      <View style={styles.naviButtons}>
        <Button
          title="Popular Movies"
          onPress={() =>
            navigation.navigate("MovieType", {
              movieType: "popular",
            })
          }
        />

        <View style={styles.whiteSpace}></View>

        <Button
          title="Top Rated Movies"
          onPress={() =>
            navigation.navigate("MovieType", {
              movieType: "top_rated",
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  text: {
    marginTop: "2%",
    marginBottom: "1%",
    textAlign: "center",
    fontSize: 25,
  },

  naviButtons: {
    flexDirection: "row",
    justifyContent: "center"
  },
  whiteSpace: {
    marginHorizontal: 15,
  },
  welcome:{
    textAlign: "center",
    fontSize: 45
  },

  title: {
    fontSize: 25,
  },
});
