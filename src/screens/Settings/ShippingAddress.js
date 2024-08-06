import React, { useState, useEffect, useContext } from "react";
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
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function ShippingAddress() {
  const navigation = useNavigation();
  const { user, setUser } = useContext(AuthContext);

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

  const address = {
    name: user.name,
    address: user.address,
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/users/${user._id}/address`
      );

      if (response.status === 200) {
        navigation.goBack();
        setUser({ ...user, address: null });
      } else {
        console.error("Failed to delete address:", response.data.message);
      }
    } catch (error) {
      console.error(
        "Error deleting address:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this address?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => handleDelete(),
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {user.address ? (
          <AddressCard confirmDelete={confirmDelete} />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No addresses added. Please add an address.
            </Text>
          </View>
        )}
      </ScrollView>
      {!user.address && (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            navigation.navigate("AddAddress");
          }}
        >
          <Text style={{ fontSize: 32, color: "white" }}>+</Text>
        </TouchableOpacity>
      )}
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
