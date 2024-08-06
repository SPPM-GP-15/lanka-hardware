import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function EditProfile() {
  const navigation = useNavigation();
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSaving, setIsSaving] = useState(false);

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

  useEffect(() => {
    setName(user.name);
    setPhoneNumber(user.phoneNumber);
  }, []);

  const handleUpdate = () => {
    if (name.trim() === "") {
      Alert.alert("Validation Error", "Name cannot be empty");
      return;
    }

    if (phoneNumber.trim() === "") {
      Alert.alert("Validation Error", "Phone number cannot be empty");
      return;
    }

    if (!/^\d+$/.test(phoneNumber)) {
      Alert.alert("Validation Error", "Phone number can only contain digits");
      return;
    }

    setIsSaving(true);
    const userData = {
      name,
      phoneNumber,
    };

    Alert.alert("Confirm Update", "Are you sure you want to update?", [
      {
        text: "Cancel",
        style: "cancel",
        onPress: () => setIsSaving(false),
      },
      {
        text: "OK",
        onPress: () => {
          setIsSaving(false);
          updateDB(userData);
        },
      },
    ]);
  };
  const updateDB = async (userData) => {
    try {
      const response = await axios.put(
        `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/users/updateUser/${user._id}`,
        userData
      );
      if (response.data.success) {
        setUser(response.data.user);
        navigation.goBack();
      } else {
        console.error("Edit failed:", response.data.message);
      }
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <View style={styles.viewBox}>
      <Text style={styles.title}>Edit Profile</Text>
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
  },
  icon: {
    marginRight: 10,
    padding: 15,
  },
  input: {
    flex: 1,
    fontSize: 15,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    paddingVertical: 15,
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
