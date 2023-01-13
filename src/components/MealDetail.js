import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "./Typography";
import { Ionicons } from "@expo/vector-icons";

const renderCheckItem = (title, checked) => (
  <View style={styles.checkItem}>
    <Ionicons
      name={checked ? "checkmark-sharp" : "close-sharp"}
      size={24}
      color={checked ? "#3A5A40" : "red"}
    />
    <Typography fontWeight="500" variant="h6">
      {title}
    </Typography>
  </View>
);

const MealDetail = ({
  duration,
  affordability,
  complexity,
  isGlutenFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
  renderChecks,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.root}>
        <Typography fontWeight="500" variant="h6">
          {duration}m
        </Typography>
        <Typography fontWeight="500" variant="h6">
          {affordability.toUpperCase()}
        </Typography>
        <Typography fontWeight="500" variant="h6">
          {complexity.toUpperCase()}
        </Typography>
      </View>
      {renderChecks && (
        <View style={[styles.root, styles.checks]}>
          <View style={styles.item}>
            {renderCheckItem("Gluten Free", isGlutenFree)}
            {renderCheckItem("Vegetarian", isVegetarian)}
          </View>
          <View style={styles.item}>
            {renderCheckItem("Vegan", isVegan)}
            {renderCheckItem("Lactose Free", isLactoseFree)}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 8,
    opacity: 0.7,
  },
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    flex: 1,
    alignItems: "center",
  },
  checks: {
    // paddingBottom: 8,
    borderTopWidth: 1.5,
    borderTopColor: "#CCD5AE",
  },
  checkItem: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
});
export default MealDetail;
