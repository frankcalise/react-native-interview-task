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
    <View>
      <Text style={styles.heading}>Whoa, over here now!</Text>
      <Formik
        initialValues={{ name: "", favoriteNumber: -1 }}
        onSubmit={values => {
          console.log("here in values", values);
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
            <TextInput
              style={styles.input}
              placeholder={`Enter your favorte number here`}
              onChangeText={handleChange("favoriteNumber")}
              value={values.favoriteNumber}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            <View style={{ margin: 20 }}>
              <Button color="#00B0F0" title="Submit" onPress={handleSubmit} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  error: { margin: 20, fontSize: 10, color: "red" },
  input: {
    height: 40,
    margin: 20,
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
