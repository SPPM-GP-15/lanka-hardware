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

export default function EditProfile() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [originalName, setOriginalName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [originalPhoneNumber, setOriginalPhoneNumber] = useState("");
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
    const profileName = "John Doe";
    const profilePhoneNumber = "1234567890";
    setName(profileName);
    setOriginalName(profileName);
    setPhoneNumber(profilePhoneNumber);
    setOriginalPhoneNumber(profilePhoneNumber);
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
          navigation.goBack();
        },
      },
    ]);
  };

  const handleBackPress = () => {
    if (name !== originalName || phoneNumber !== originalPhoneNumber) {
      Alert.alert(
        "Unsaved Changes",
        "You have unsaved changes. Are you sure you want to go back?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Go Back",
            onPress: () => navigation.goBack(),
            style: "destructive",
          },
        ],
        { cancelable: false }
      );
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    const handleBeforeRemove = (e) => {
      if (!isSaving) {
        e.preventDefault();
        Alert.alert(
          "Discard changes?",
          "If you go back now, your changes will be lost.",
          [
            { text: "Cancel", style: "cancel", onPress: () => {} },
            {
              text: "Discard",
              style: "destructive",
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }
    };

    navigation.addListener("beforeRemove", handleBeforeRemove);

    return () => {
      navigation.removeListener("beforeRemove", handleBeforeRemove);
    };
  }, [navigation, name, phoneNumber, isSaving]);

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
