import React from "react";
import { View, Text, Button } from "react-native";
import useName from "../hooks/useName";
import ImageList from "../components/ImageList";

export default function ImagesScreen({ navigation }) {
  // from navigation params
  const favoriteNumber = navigation.getParam("favoriteNumber");

  // let's grab the user's name from async storage
  const { name } = useName();

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text style={{ margin: 20 }}>
        {name}, today's your lucky day! {favoriteNumber} images brought right to your
        phone.
      </Text>
      <View style={{ margin: 20 }}>
        <Button
          title="No thanks, get me to root screen"
          onPress={() => {
            navigation.popToTop();
          }}
        />
      </View>
      <ImageList style={{ marginTop: 20 }} number={Number(favoriteNumber)} />
    </View>
  );
}
