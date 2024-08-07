import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function ProfileDetails() {
  const navigation = useNavigation();
  const { user, setUser } = useContext(AuthContext);
  const [zip, setZip] = useState((user.address && user.address.zip) || "");
  const [addressLine, setAddressLine] = useState(
    (user.address && user.address.addressLine) || ""
  );
  const [city, setCity] = useState((user.address && user.address.city) || "");
  const [country, setCountry] = useState(
    (user.address && user.address.country) || ""
  );

  const [useDefaultAddress, setUseDefaultAddress] = useState(false);

  const handleConfirm = () => {
    if (!useDefaultAddress && (!zip || !addressLine || !city || !country)) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }
    saveInDB({
      zip,
      addressLine,
      city,
      country,
    });
  };

  const saveInDB = async (addressData) => {
    try {
      const response = await axios.post(
        `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/users/${user._id}/address`,
        addressData
      );
      setUser({ ...user, address: response.data.address });
      navigation.navigate("Payment");
    } catch (error) {
      console.error(
        "Error adding address:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleChange = (setter) => (value) => setter(value);

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{}}
      keyboardShouldPersistTaps="handled"
      style={styles.viewBox}
    >
      <Text style={styles.title}>Personal Details</Text>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Name" value={user.name} />
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={user.email}
        />
      </View>
      <Text style={styles.title}>Address Details</Text>

      <View style={{ marginTop: 10 }}>
        <Text style={styles.label}>Zip</Text>
        <TextInput
          style={styles.input}
          placeholder="Zip"
          value={zip}
          onChangeText={handleChange(setZip)}
          autoCorrect={false}
          keyboardType="number-pad"
          textContentType="none"
          returnKeyType="next"
          editable={!useDefaultAddress} // Add this prop
        />
      </View>
      <View>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={addressLine}
          onChangeText={handleChange(setAddressLine)}
          autoCorrect={false}
          textContentType="streetAddressLine1"
          returnKeyType="next"
          editable={!useDefaultAddress} // Add this prop
        />
      </View>
      <View>
        <Text style={styles.label}>City</Text>
        <TextInput
          style={styles.input}
          placeholder="City"
          value={city}
          onChangeText={handleChange(setCity)}
          autoCorrect={false}
          textContentType="addressCity"
          returnKeyType="next"
          editable={!useDefaultAddress} // Add this prop
        />
      </View>
      <View>
        <Text style={styles.label}>Country</Text>
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={country}
          onChangeText={handleChange(setCountry)}
          autoCorrect={false}
          textContentType="countryName"
          returnKeyType="next"
          editable={!useDefaultAddress} // Add this prop
        />
      </View>

      <View style={{ flex: 1 }} />
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm and Pay</Text>
      </TouchableOpacity>
    </ScrollView>
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
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "500",
  },
  input: {
    flex: 1,
    fontSize: 15,
    padding: 13,
    backgroundColor: "#fafafa",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
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
    marginTop: 40,
    marginBottom: 80,
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
