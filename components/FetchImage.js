import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function FetchImage({ url }) {
  console.log(url);
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={{ uri: url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column", margin: 5 },
  thumbnail: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 100,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10
  }
});
