import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";

const renderMealItem = ({ item }) => <MealItem {...item} />;

const MealsList = ({ data }) => {
  return (
    <View style={styles.root}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
  },
});

export default MealsList;
