import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./Card";
import Typography from "./Typography";

const GridTile = ({ title, color, onPress }) => {
  return (
    <Card style={styles.root} onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color }]}>
        <Typography variant="h5" color="white" fontWeight="700">
          {title}
        </Typography>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 150,
    // opacity: 0.7,
  },
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GridTile;
