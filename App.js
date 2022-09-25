import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/homescreen/HomeScreen"
import DetailScreen from "./components/detailscreen/DetailScreen"
import MovieType from "./components/movietype/MovieType";


const NavigationStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator>
        <NavigationStack.Screen name="Home" component={HomeScreen} />
        <NavigationStack.Screen name="MovieType" component={MovieType} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
}