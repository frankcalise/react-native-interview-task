import React from "react";
import { AsyncStorage } from "react-native";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import useName from "../hooks/useName";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(20)
    .required("Name is required, I'll only ask you once"),
  favoriteNumber: Yup.number()
    .positive()
    .required("Favorite number is required")
});

export default function FormScreen({ navigation }) {
  const { name, nameLoaded } = useName();

  return (
    <View>
      <Text style={styles.heading}>Whoa, over here now!</Text>
      {nameLoaded === false && (
        <Text>Checking to see if you've been here before...</Text>
      )}
      {nameLoaded === true && (
        <>
          <Formik
            initialValues={{ name, favoriteNumber: -1 }}
            onSubmit={values => {
              // user submitted, head to the images screen to
              // retrieve that many images in a list. Pass it via
              // navigation parameters
              navigation.navigate("Images", {
                favoriteNumber: values.favoriteNumber
              });

              // Store name in AsyncStorage to not ask next time app is launched
              AsyncStorage.setItem("name", values.name);
            }}
            validationSchema={validationSchema}
          >
            {({ handleChange, values, errors, handleSubmit }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder={`Enter your name here`}
                  onChangeText={handleChange("name")}
                  value={values.name}
                />
                {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                <TextInput
                  style={styles.input}
                  placeholder={`Enter your favorite positive number here`}
                  onChangeText={handleChange("favoriteNumber")}
                  value={
                    values.favoriteNumber > 0
                      ? values.favoriteNumber.toString()
                      : ""
                  }
                  keyboardType="phone-pad"
                />
                {errors.favoriteNumber && (
                  <Text style={styles.error}>{errors.favoriteNumber}</Text>
                )}
                <View style={{ margin: 20 }}>
                  <Button
                    color="#00B0F0"
                    title="Submit"
                    onPress={handleSubmit}
                  />
                </View>
              </>
            )}
          </Formik>

          <View style={{ margin: 20 }}>
            <Button
              color="#FF8C00"
              title="Back via navigation prop"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  error: { marginLeft: 20, marginTop: 5, fontSize: 10, color: "red" },
  input: {
    height: 40,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 5
  },
  heading: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold"
  }
});
