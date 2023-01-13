import React from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { useFavoritesContext } from "./../store/context/FavoritesContext";
import { StyleSheet, View } from "react-native";
import Typography from "../components/Typography";
import { Ionicons } from "@expo/vector-icons";

const Favorites = () => {
  const { getFavoritesList } = useFavoritesContext();

  const favoriteMeals = React.useMemo(
    () => getFavoritesList(MEALS),
    [getFavoritesList]
  );

  if (!favoriteMeals.length) {
    return (
      <View style={styles.emptyRoot}>
        <Ionicons name="boat-outline" size={48} color="#e85d04" />
        <Typography variant="h5" fontWeight="800" color="#03045e">
          You have no favorite meals yet!
        </Typography>
      </View>
    );
  }

  return <MealsList data={favoriteMeals} />;
};

const styles = StyleSheet.create({
  emptyRoot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default Favorites;
