import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleForgotPassword = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot</Text>
      <Text style={styles.title}>Password?</Text>
      <View style={{ marginTop: 35 }}>
        <View style={styles.inputContainer}>
          <Icon name="mail" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.belowText}>
          <Text style={styles.agreement}>
            *We will send you a mail to reset your new password
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
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

export default ForgotPassword;
