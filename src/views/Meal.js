import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import List from "../components/List";
import MealDetail from "../components/MealDetail";
import Typography from "../components/Typography";
import { MEALS } from "../data/dummy-data";
import IconButton from "./../components/IconButton";
import { useFavoritesContext } from "../store/context/FavoritesContext";

const Meal = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { toggleFavorite, isMealFavorite } = useFavoritesContext();

  const meal = React.useMemo(
    () => MEALS.find((meal) => meal.id === route.params.id),
    [route.params.id]
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          icon={isMealFavorite(meal.id) ? "star" : "star-outline"}
          color="gold"
          onPress={() => toggleFavorite(meal.id)}
          style={{ marginRight: 16 }}
        />
      ),
    });
  }, [meal.title, navigation, isMealFavorite, toggleFavorite]);

  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Typography variant="h4" fontWeight="800" color="#344E41">
        {meal.title}
      </Typography>
      <MealDetail {...meal} renderChecks />
      <List title="Ingredients" data={meal.ingredients} />
      <List title="How to make it?" data={meal.steps} numbered />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16,
  },
  image: {
    height: 250,
  },
});

export default Meal;
