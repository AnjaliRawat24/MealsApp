import React from "react";
import { StyleSheet, View } from "react-native";
import Typography from "./Typography";
import Subtitle from "./Subtitle";

const List = ({ data, title, numbered }) => {
  return (
    <>
      <Subtitle>{title}</Subtitle>
      <View style={styles.root}>
        {data.map((item, i) => (
          <View style={styles.listItem}>
            <Typography key={item} align="center">
              {numbered && <Typography>{i + 1}.&nbsp;</Typography>}
              {item}
            </Typography>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16,
    // width: "100%",
    alignSelf: "center",
  },
  listItem: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    // marginHorizontal: 8,
    backgroundColor: "#EDEDE9",
    opacity: 0.9,
  },
});

export default List;
