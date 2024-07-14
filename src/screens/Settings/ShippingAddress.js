import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddressCard from "../../components/address/AddressCard";

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
      default: true,
    },
    {
      name: "John Doe",
      address: "3 Newbridge Court, Chino Hills, CA 91709, United States",
      default: false,
    },
    {
      name: "John Doe",
      address: "51 Riverside, Chino Hills, CA 91709, United States",
      default: false,
    },
  ]);

  const handleDefault = (index) => {
    const newAddresses = addresses.map((address, i) =>
      i === index
        ? { ...address, default: true }
        : { ...address, default: false }
    );
    setAddresses(newAddresses);
  };

  const handleDelete = (index) => {
    let newAddresses = addresses.filter((_, i) => i !== index);

    // Check if the deleted address was the default one
    const hadDefault = addresses[index].default;

    // If it was, set the first address in the list as the new default
    if (hadDefault && newAddresses.length > 0) {
      newAddresses[0].default = true;
    }

    setAddresses(newAddresses);
  };

  const confirmDelete = (index) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this address?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => handleDelete(index),
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {addresses.length > 0 ? (
          addresses.map((address, index) => (
            <AddressCard
              key={index}
              index={index}
              address={address}
              handleDefault={handleDefault}
              confirmDelete={confirmDelete}
            />
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No addresses added. Please add an address.
            </Text>
          </View>
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate("AddAddress");
        }}
      >
        <Text style={{ fontSize: 32, color: "white" }}>+</Text>
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
  addButton: {
    backgroundColor: "#405D72",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
  },
});
