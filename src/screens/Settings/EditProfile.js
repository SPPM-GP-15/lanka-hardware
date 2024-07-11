import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

export default function EditProfile() {
  const navigation = useNavigation();
  const [name, setName] = useState("");

  useEffect(() => {
    const parent = navigation.getParent();
    parent?.setOptions({
      tabBarStyle: { display: "none" },
    });

    return () => {
      parent?.setOptions({
        tabBarStyle: [{ display: "flex" }, null],
      });
    };
  }, [navigation]);

  return (
    <View style={styles.viewBox}>
      <Text style={styles.title}>Edit Profile</Text>

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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBox: {
    height: "100%",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
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
  button: {
    marginTop: 40,
    backgroundColor: "#405D72",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
