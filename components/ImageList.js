import React from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import FetchImage from "./FetchImage";

// added this because I overlooked passing the number
// straight from formik (string, since TextInput)
// and my array below wouldn't fill correctly, I'd always
// get one element.
const propTypes = { number: PropTypes.number };

function ImageList({ number }) {
  // create array with favorite number amount of items
  const items = Array(number)
    .fill(null)
    .map(
      () =>
        `https://picsum.photos/100/100/?image=${Math.floor(
          Math.random() * 100
        )}`
    );
  return (
    <FlatList
      data={items}
      horizontal={false}
      renderItem={({ item }) => <FetchImage url={item} />}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20
  }
});

ImageList.propTypes = propTypes;

export default ImageList;
