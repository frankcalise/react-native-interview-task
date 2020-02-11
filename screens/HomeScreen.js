import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import {
  HeaderButtons,
  HeaderButton,
  Item
} from "react-navigation-header-buttons";

const MaterialIconHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={MaterialIcon}
    iconSize={25}
    color="black"
  />
);

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Amazing, isn't it?</Text>
      <Button
        title="Let's go somewhere"
        onPress={() => {
          navigation.navigate("Form");
        }}
      />
    </View>
  );
}

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'is this working',
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
