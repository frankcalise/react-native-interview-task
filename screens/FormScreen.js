import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(20)
    .required("Required")
});

export default function FormScreen({ navigation }) {
  
  return (
    <Formik
      initialValues={{ name: "", favoriteNum: -1 }}
      onSubmit={values => {
        console.log("here in values", values);
      }}
      validationSchema={validationSchema}
    >
      {({ handleChange, values, errors, handleSubmit }) => (
        <View>
          <Text style={styles.heading}>Whoa, over here now!</Text>
          <TextInput
            style={{ height: 40 }}
            placeholder={`Enter your name here`}
            onChangeText={handleChange("name")}
            value={values.name}
          />
          {errors.name && (
            <Text style={{ fontSize: 10, color: "red" }}>{errors.name}</Text>
          )}
          <Button color="#00B0F0" title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold"
  }
});
