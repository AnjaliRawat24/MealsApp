import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const withImageBackground = (WrappedComponent) => {
  return (props) => (
    <ImageBackground
      style={styles.root}
      imageStyle={styles.imageBackground}
      resizeMode="cover"
      source={require("../../assets/background.jpg")}
    >
      <WrappedComponent {...props} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.8,
  },
});

export default withImageBackground;
