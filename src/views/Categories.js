import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GridTile from "../components/GridTile";
import { CATEGORIES } from "../data/dummy-data";

const Categories = ({ navigation }) => {
  const pressHandler = (item) => {
    navigation.navigate("MealsOverview", item);
  };

  const renderCategoryItem = ({ item }) => {
    return (
      <GridTile
        title={item.title}
        color={item.color}
        onPress={() => pressHandler(item)}
      />
    );
  };

  return (
    <View style={styles.root}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Categories;
