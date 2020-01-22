import React from 'react'
import { render, findByText } from "@testing-library/react-native";
import HomeScreen from "./HomeScreen";

test("label should be present", async () => {
  const { getByTestId, getByText, queryByTestId, baseElement } = render(
    <HomeScreen />
  );

  await expect(findByText("Amazing")).toBeTruthy()
});

test("button should be present", async () => {
  const { getByTestId, getByText, queryByTestId, baseElement } = render(
    <HomeScreen />
  );

  await expect(findByText("go somewhere")).toBeTruthy()
});
