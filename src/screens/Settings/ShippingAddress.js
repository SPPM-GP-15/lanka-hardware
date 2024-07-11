import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";

export default function ShippingAddress() {
  const navigation = useNavigation();

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

  const [addresses, setAddresses] = useState([
    {
      name: "Jane Doe",
      address: "3 Newbridge Court, Chino Hills, CA 91709, United States",
      checked: true,
    },
    {
      name: "John Doe",
      address: "3 Newbridge Court, Chino Hills, CA 91709, United States",
      checked: false,
    },
    {
      name: "John Doe",
      address: "51 Riverside, Chino Hills, CA 91709, United States",
      checked: false,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Address</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {addresses.map((address, index) => (
          <View key={index} style={styles.addressCard}>
            <View style={styles.addressInfo}>
              <Text style={styles.name}>{address.name}</Text>
              <Text style={styles.address}>{address.address}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => handleCheck(index)}
                style={styles.checkButton}
              ></TouchableOpacity>
              <TouchableOpacity style={styles.editButton}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate("AddAddress");
        }}
      >
        <Text style={{ fontSize: 30, color: "white" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  addressCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#dddd",
    borderRadius: 8,
  },
  addressInfo: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  address: {
    fontSize: 13,
    color: "#333",
    marginTop: 5,
    width: "80%",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkButton: {
    marginRight: 10,
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "#071952",
  },
  addButton: {
    backgroundColor: "#405D72",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
});
