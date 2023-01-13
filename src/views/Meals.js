import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { useFavoritesContext } from "../store/context/FavoritesContext";

const Meals = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { appendFavoriteKey } = useFavoritesContext();

  const { id: categoryId, title: categoryName } = React.useMemo(
    () => route.params,
    [route.params]
  );

  const displayedMeals = React.useMemo(
    () =>
      appendFavoriteKey(
        MEALS.filter((meal) => meal.categoryIds.includes(categoryId))
      ),
    [MEALS, categoryId, appendFavoriteKey]
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryName,
    });
  }, [categoryName, navigation]);

  return <MealsList data={displayedMeals} />;
};

export default Meals;
