import React from "react";
import { View, Text, Button, AsyncStorage } from "react-native";

export default function ImagesScreen({ navigation }) {
  // from navigation params
  const favoriteNumber = navigation.getParam("favoriteNumber");

  // let's grab the user's name from async storage
  // and set it to state
  const [name, setName] = React.useState('Looking up your name...')

  React.useEffect(() => {
    // we could use useCallback to not do this here directly
    async function getName() {
      const lookupName = await AsyncStorage.getItem('name')
      setName(lookupName)
    }

    getName()
  }, [])

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
      ></Button>
    </View>
  );
}
