import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate("AddAddress");
        }}
      >
        <Text style={[styles.buttonText, { fontSize: 30 }]}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  addressCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f5f5f5",
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
    fontSize: 14,
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
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
  addButton: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
    justifyContent: "center",
  },
});
