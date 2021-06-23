import React, { useState } from "react";
import {
  Button,
  TextInput,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

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
          margin: 40,
        }}
      >
        HouseManager
      </Text>
      <SafeAreaView style={styles.forms}>
        <TextInput
          placeholder="Username"
          onChangeText={(name) => setName(name)}
          style={styles.textIn}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(pass) => setPass(pass)}
          style={styles.textIn}
        />
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          console.log(name);
          console.log(password);
        }}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => console.log("forgot")}
      >
        <Text style={styles.loginText}>FORGOT PASSWORD?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("register")}>
        <Text style={styles.register}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textIn: {
    fontSize: 18,
    margin: 5,
  },
  forms: {
    marginBottom: 40,
  },
  loginButton: {
    width: 200,
    borderRadius: 25,
    height: 50,
    backgroundColor: "green",
    margin: 5,
  },
  loginText: {
    fontFamily: "Georgia-Italic",
    textAlign: "center",
    color: "white",
    textAlignVertical: "center",
    margin: 15,
  },
  register: {
    fontFamily: "Georgia-Italic",
    color: "green",
    fontSize: 18,
    marginTop: 5,
  },
});
