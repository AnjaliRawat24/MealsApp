import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Card from "./Card";
import Typography from "./Typography";
import MealDetail from "./MealDetail";
import { Ionicons } from "@expo/vector-icons";

const MealItem = (props) => {
  const { title, imageUrl, ...details } = props;

  const navigation = useNavigation();

  const pressHandler = () => navigation.navigate("MealDetail", props);

  return (
    <Card style={styles.root} onPress={pressHandler}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Typography variant="h5" fontWeight="800" color="#344E41">
          {title}
        </Typography>
      </View>
      {details.isFavorite && (
        <View style={styles.favIcon}>
          <Ionicons name="star-sharp" color="gold" size={24} />
        </View>
      )}
      <MealDetail {...details} />
    </Card>
  );
};

const styles = StyleSheet.create({
  root: {
    // height: 300,
  },
  image: {
    flex: 1,
    // resizeMode: "contain",
    marginBottom: 8,
    height: 250,
  },
  container: {
    // borderRadius: 8,
    // overflow: "hidden",
    flex: 1,
  },
  favIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 8,
  },
});

export default MealItem;
