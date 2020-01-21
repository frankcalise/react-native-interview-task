import React from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList } from "react-native";

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
        `https://picsum.photos/200/113/?image=${Math.floor(
          Math.random() * 100
        )}`
    );

  return (
    <View>
      {items.map((url, index) => (
        <Text key={`image-${index}`}>{url}</Text>
      ))}
    </View>
  );
}

ImageList.propTypes = propTypes;

export default ImageList;
