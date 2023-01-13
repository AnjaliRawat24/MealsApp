import React from "react";
import { StyleSheet, Text } from "react-native";

const Typography = ({
  variant = "body1",
  children,
  fontWeight,
  color = "black",
  align: textAlign = "center",
}) => {
  return (
    <Text
      style={[styles[variant], { color, fontWeight, textAlign, margin: 8 }]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: "700",
  },
  h2: {
    fontSize: 30,
    fontWeight: "700",
  },
  h3: {
    fontSize: 28,
    fontWeight: "700",
  },
  h4: {
    fontSize: 24,
    fontWeight: "500",
  },
  h5: {
    fontSize: 20,
    fontWeight: "500",
  },
  h6: {
    fontSize: 18,
    fontWeight: "500",
  },
  body1: {
    fontSize: 16,
    fontWeight: "400",
  },
  body2: {
    fontSize: 14,
    fontWeight: "400",
  },
});

export default Typography;
