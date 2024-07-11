import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    // Handle account creation logic here
    console.log("Creating account with:", { email, password });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      bounces={false}
      style={styles.container}
    >
      <Text style={styles.title}>Lets Register </Text>
      <Text style={styles.title}>Account</Text>
      <View style={{ marginTop: 35 }}>
        <View style={styles.inputContainer}>
          <Icon name="user" size={24} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="mail" size={24} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={24} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={24} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <Text style={[styles.agreement, { marginVertical: 10 }]}>
          By continuing, you agre to our Terms & Conditions
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <View style={styles.belowText}>
          <Text style={styles.agreement}>Already have an account? </Text>
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate("Login")}
          >
            Log In
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 3,
    fontFamily: "sans-serif",
  },
  inputContainer: {
    backgroundColor: "#fafafa",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    paddingVertical: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
  },
  belowText: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  agreement: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
  },
  loginText: {
    fontSize: 13,
    color: "#3F72AF",
    textAlign: "center",
  },
  button: {
    marginVertical: 20,
    backgroundColor: "#405D72",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Signup;
