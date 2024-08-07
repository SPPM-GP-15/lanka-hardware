import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const addressesInputs = {
  addressLine: "",
  city: "",
  pincode: "",
  country: "",
};

export default function AddAddress() {
  const navigation = useNavigation();
  const { user, setUser } = useContext(AuthContext);
  const [address, setAddress] = useState(addressesInputs);
  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  const validateInputs = () => {
    let valid = true;
    let errors = {};

    if (!address.addressLine) {
      valid = false;
      errors.addressLine = "Address Line is required";
    }

    if (!address.city) {
      valid = false;
      errors.city = "City is required";
    }

    if (!address.pincode) {
      valid = false;
      errors.pincode = "Zip Code is required";
    }

    if (!address.country) {
      valid = false;
      errors.country = "Country is required";
    }

    setErrors(errors);
    return valid;
  };
  const saveInDB = async (addressData) => {
    try {
      const response = await axios.post(
        `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/users/${user._id}/address`,
        addressData
      );
      setUser({ ...user, address: response.data.address });
      navigation.goBack();
    } catch (error) {
      console.error(
        "Error adding address:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleSave = () => {
    if (validateInputs()) {
      const addressData = {
        addressLine: address.addressLine,
        city: address.city,
        zip: address.pincode,
        country: address.country,
      };

      setIsSaving(true);
      Alert.alert(
        "Confirm Save",
        "Are you sure you want to save this address?",
        [
          {
            text: "Cancel",
            style: "cancel",
            onPress: () => setIsSaving(false),
          },
          {
            text: "OK",
            onPress: () => {
              setIsSaving(false);
              saveInDB(addressData);
            },
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.header}>Add Address</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address Line *</Text>
          <TextInput
            style={[styles.input, { height: 100 }]}
            value={address.addressLine}
            onChangeText={(text) =>
              setAddress({ ...address, addressLine: text })
            }
            multiline={true}
            numberOfLines={3}
          />
          {errors.addressLine && (
            <Text style={styles.errorText}>{errors.addressLine}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>City *</Text>
          <TextInput
            style={styles.input}
            value={address.city}
            onChangeText={(text) => setAddress({ ...address, city: text })}
            returnKeyType="next"
          />
          {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Zip Code *</Text>
          <TextInput
            style={styles.input}
            value={address.pincode}
            onChangeText={(text) => setAddress({ ...address, pincode: text })}
            keyboardType="numeric"
            returnKeyType="next"
          />
          {errors.pincode && (
            <Text style={styles.errorText}>{errors.pincode}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Country *</Text>
          <TextInput
            style={styles.input}
            value={address.country}
            onChangeText={(text) => setAddress({ ...address, country: text })}
            returnKeyType="done"
          />
          {errors.country && (
            <Text style={styles.errorText}>{errors.country}</Text>
          )}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={handleSave}>
        <Text style={{ fontSize: 17, color: "white" }}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fafafa",
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
  addButton: {
    backgroundColor: "#405D72",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    padding: 10,
  },
});
