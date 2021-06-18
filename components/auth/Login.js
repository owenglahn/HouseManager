import React, { Component, useState } from "react";
import { Button, TextInput, SafeAreaView, Text } from "react-native";

function onLogin(name, pass) {
  console.log(name);
  console.log(pass);
}

export default function Login(props) {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  return (
    <SafeAreaView style={props.style}>
      <Text
        style={{
          fontSize: 36,
          fontFamily: "Georgia-Italic",
          textAlign: "center",
          color: "green",
          paddingBottom: 80,
        }}
      >
        Welcome to HouseManager!
      </Text>
      <TextInput
        placeholder="Username"
        onChangeText={(name) => setName(name)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(pass) => setPass(pass)}
      />
      <Button title="Login" onPress={() => onLogin(name, password)} />
      <Button title="Forgot Password?" onPress={() => console.log("forgot")} />
    </SafeAreaView>
  );
}
