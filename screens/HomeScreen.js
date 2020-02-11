import React from "react";
import { StyleSheet, Text, View, Button, Animated, Easing } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {
  HeaderButtons,
  HeaderButton,
  Item
} from "react-navigation-header-buttons";
import { TouchableOpacity } from "react-native-gesture-handler";

const MaterialIconHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={MaterialIcon}
    iconSize={25}
    color="black"
  />
);

export default function HomeScreen({ navigation }) {
  const [toggled, setToggled] = React.useState(false)
  const [animatedValue, setAnimatedValue] = React.useState(
    new Animated.Value(0)
  );

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: toggled ? 0 : 1,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.linear
    }).start();
  }, [toggled])

  function rotate() {
    console.log("rotate!");
    // if (toggled) {
    //   // reset
    //   Animated.timing(animatedValue, {
    //     toValue: 0,
    //     duration: 250
    //   }).start();
    // } else {
    //   Animated.timing(animatedValue, {
    //     toValue: 100,
    //     duration: 250
    //   }).start();
    // }
    setToggled(!toggled)
  }

  const rotationAnimation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });
  return (
    <View style={styles.container}>
      <Text>Amazing, isn't it?</Text>
      <Button
        title="Let's go somewhere"
        onPress={() => {
          navigation.navigate("Form");
        }}
      />
      <TouchableOpacity onPress={rotate}>
        <Animated.View style={{ transform: [{ rotate: rotationAnimation }] }}>
          <MaterialIcon name="add" size={25} color="black" style />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "is this working",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MaterialIconHeaderButton}>
        <Item title="Add" iconName="add" onPress={() => console.log("test")} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
