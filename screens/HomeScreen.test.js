import React from "react";
import {
  render,
  fireEvent
} from "@testing-library/react-native";
import HomeScreen from "./HomeScreen";

describe("<HomeScreen>", () => {
  test("Press 'Let's go somewhere' button navigates", async () => {
    const navigation = { navigate: jest.fn() };

    const { getByText } = render(<HomeScreen navigation={navigation} />);

    const button = getByText("Let's go somewhere");
    fireEvent.press(button);

    expect(navigation.navigate).toHaveBeenCalledTimes(1);
  });

  test("Amazing label is displayed", async () => {
    const { getByText } = render(<HomeScreen  />);
    const label = getByText("Amazing, isn't it?")
    expect(label).toBeTruthy()
  })
});
