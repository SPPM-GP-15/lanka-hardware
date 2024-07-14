import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

export default function Checkout() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [originalName, setOriginalName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [originalPhoneNumber, setOriginalPhoneNumber] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleUpdate = () => {};

  return (
    <View style={styles.viewBox}>
      <Text style={styles.title}>Personal Details</Text>
      <View style={{ marginTop: 35 }}>
        <Text style={styles.label}>Enter Name</Text>
        <View style={styles.inputContainer}>
          <Icon name="user" size={24} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
            textContentType="name"
            autoCapitalize="words"
            returnKeyType="next"
          />
        </View>
      </View>
      <View>
        <Text style={styles.label}>Enter Phone Number</Text>
        <View style={styles.inputContainer}>
          <Icon name="phone" size={24} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            autoCorrect={false}
            textContentType="telephoneNumber"
            keyboardType="phone-pad"
            returnKeyType="done"
          />
        </View>
      </View>
      <View style={{ flex: 1 }} />

      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBox: {
    flex: 1,
    height: "100%",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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
  label: {
    marginBottom: 10,
    color: "#222",
  },
  button: {
    backgroundColor: "#405D72",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
