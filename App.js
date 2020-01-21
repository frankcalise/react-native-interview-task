import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import { createAppContainer } from "react-navigation";
import FormScreen from "./screens/FormScreen";

const AppNavigator = createStackNavigator({ Home: { screen: HomeScreen }, Form: FormScreen });

export default createAppContainer(AppNavigator);
