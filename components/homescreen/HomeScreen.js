import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView} from "react-native";
import { FlatList, SectionList } from "react-native-web";
import {API_KEY} from "@env"


export default function HomeScreen({ navigation } ) {

    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
            What movies do you wanna watch?
        </Text>
        <View style={styles.naviButtons}>
        <Button style={styles.naviButton}
        title="Popular Movies"
        onPress={() =>
            navigation.navigate("MovieType", {
              movieType: "popular",
            })
          }
        />

        <View style={styles.whiteSpace}></View>

        <Button
        style={styles.naviButton}
        title="Top Rated Movies"
        onPress={() =>
            navigation.navigate("MovieType", {
              movieType: "top_rated",
            })
          }
        />
        </View>
        </SafeAreaView>
    )
        }
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    },

    text: {
        textAlign: "center",
        fontSize: 25
    },

    naviButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: -20

    },
    whiteSpace:{
        marginHorizontal: 15,

    },


    title: {
        fontSize: 25
    }
})


