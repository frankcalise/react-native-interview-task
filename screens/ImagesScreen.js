import React from "react";
import { View, Text, Button } from "react-native";

export default function ImagesScreen({ navigation }) {
  const favoriteNumber = navigation.getParam("favoriteNumber");
  return (
    <View>
      <Text>
        Today's your lucky day! {favoriteNumber} images brought right to your
        phone, NAME
      </Text>
      <Button
        title="No thanks, get me to root screen"
        onPress={() => {
          navigation.popToTop();
        }}
      ></Button>
    </View>
  );
}
