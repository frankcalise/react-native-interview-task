import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function FormScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.heading}>Whoa, over here now!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold"
  }
});
