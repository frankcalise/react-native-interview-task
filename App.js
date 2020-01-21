import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import { createAppContainer } from "react-navigation";
import FormScreen from "./screens/FormScreen";
import ImagesScreen from "./screens/ImagesScreen";

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Form: { screen: FormScreen },
  Images: { screen: ImagesScreen }
});

export default createAppContainer(AppNavigator);
