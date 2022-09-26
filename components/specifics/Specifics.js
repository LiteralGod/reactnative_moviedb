import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { API_KEY } from "@env";

export default function Specifics({ route }) {
    
    const [data, setData] = useState({});
  
    
    const { movieId } = route.params;
  
    useEffect(() => {
      getDetails();
    }, []);
  
    function getDetails() {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  
    return (
      <View style={styles.container}>
         <Text style={styles.title}>{data.title}</Text>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/original${data.poster_path}`,
          }}
        />
        <Text style={styles.descriptionTitle}> Description </Text>
        <Text style={styles.overview}>{data.overview}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center"
    },
    title: {
      fontSize: 28,
      marginBottom: 10,
    },
    descriptionTitle: {
      marginTop: 20,
      fontSize: 25,
      fontStyle: "italic"
    },
    overview: {
      marginHorizontal: "20%"
    },
  
    image: {
      width: "50%",
      height:"50%",
      resizeMode: 'contain',
    },
  });
  