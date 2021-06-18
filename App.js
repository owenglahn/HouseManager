import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  TextInput,
  Text,
} from "react-native";
import Login from "./components/auth/Login";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login style={styles.login} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  login: {
    height: 500,
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  mainContainer: {
    marginTop: 22,
  },
  modalContainer: {
    marginTop: 22,
  },
});
