import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const Meals = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { id: categoryId, title: categoryName } = React.useMemo(
    () => route.params,
    [route.params]
  );

  const displayedMeals = React.useMemo(
    () => MEALS.filter((meal) => meal.categoryIds.includes(categoryId)),
    [MEALS, categoryId]
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryName,
    });
  }, [categoryName, navigation]);

  return <MealsList data={displayedMeals} />;
};

export default Meals;
