import React from "react";
import { AsyncStorage } from "react-native";

export default function useName() {
  const [name, setName] = React.useState("");
  const [nameLoaded, setNameLoaded] = React.useState(false)
  React.useEffect(() => {
    // we could use useCallback to not do this here directly
    async function getName() {
      const lookupName = await AsyncStorage.getItem("name");
      setName(lookupName);
      setNameLoaded(true)
    }

    getName();
  }, []);

  return {name, nameLoaded};
}
