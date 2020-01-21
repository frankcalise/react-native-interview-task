import React from "react";
import { View, Text, Button } from "react-native";
import useName from "../hooks/useName";
import ImageList from '../components/ImageList'

export default function ImagesScreen({ navigation }) {
  // from navigation params
  const favoriteNumber = navigation.getParam("favoriteNumber");

  // let's grab the user's name from async storage
  const { name } = useName();

  return (
    <View>
      <Text>
        Today's your lucky day! {favoriteNumber} images brought right to your
        phone, {name}
      </Text>
      <Button
        title="No thanks, get me to root screen"
        onPress={() => {
          navigation.popToTop();
        }}
      />
      <ImageList number={Number(favoriteNumber)} />
    </View>
  );
}
