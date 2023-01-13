import React from "react";
import { Platform, Pressable, StyleSheet, View } from "react-native";

const Card = ({ children, style, onPress }) => {
  return (
    <View style={[styles.root, style]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        android_ripple="#ccc"
        onPress={onPress}
      >
        {children}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.select({ android: "hidden" }),
  },
  button: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: { opacity: Platform.select({ ios: 0.8 }) },
});

export default Card;
