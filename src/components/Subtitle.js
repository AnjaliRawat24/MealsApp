import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "./Typography";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitle}>
      <Typography variant="h4" fontWeight="500" color="green">
        {children}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    borderBottomWidth: 2,
    borderBottomColor: "green",
    marginHorizontal: 28,
    marginTop: 12,
  },
});

export default Subtitle;
