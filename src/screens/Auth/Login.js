import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login("Ahmed");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      bounces={false}
      style={styles.container}
    >
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.title}>Back!</Text>
      <View style={{ marginTop: 35 }}>
        <View style={styles.inputContainer}>
          <Icon name="user" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Text
          style={styles.forgetPass}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot password?
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.belowText}>
          <Text style={styles.agreement}>Don't have an account? </Text>
          <Text
            style={styles.signupTxt}
            onPress={() => navigation.navigate("Signup")}
          >
            Sign up
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
  forgetPass: {
    fontSize: 13,
    marginVertical: 5,
    marginLeft: "auto",
    color: "#3F72AF",
  },
  belowText: {
    marginTop: 30,
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
  signupTxt: {
    fontSize: 13,
    color: "#3F72AF",
    textAlign: "center",
  },
  button: {
    marginTop: 20,
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

export default Login;
