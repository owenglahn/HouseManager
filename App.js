import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, Button, Alert } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  return (
    <SafeAreaView style={styles}>
      <Button
        title="Click Me"
        onPress={() => {
          Alert.alert("Clicked", "You clicked on the button 😱", [
            {
              text: "Cancel",
              style: "cancel",
              onPress: console.log("Cancel Pressed"),
            },
            { text: "OK", onPress: console.log("OK pressed") },
          ]);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});
