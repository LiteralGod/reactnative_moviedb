import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/homescreen/HomeScreen"
import MovieType from "./components/movietype/MovieType";
import Specifics from "./components/specifics/Specifics";


const NavigationStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator>
        <NavigationStack.Screen name="Home" component={HomeScreen} />
        <NavigationStack.Screen name="MovieType" component={MovieType} />
        <NavigationStack.Screen name="Specifics" component={Specifics} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
}