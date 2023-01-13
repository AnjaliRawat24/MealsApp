import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, icon, color, style }) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.buttonPressed, style]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  buttonPressed: { opacity: 0.7 },
});

export default IconButton;
