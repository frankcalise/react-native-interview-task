import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import { createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({ Home: { screen: HomeScreen } });

export default createAppContainer(AppNavigator);
