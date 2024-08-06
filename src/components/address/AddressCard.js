import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function AddressCard({ index, confirmDelete }) {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.addressCard}>
      <View style={styles.actions}>
        <View style={styles.addressInfo}>
          <Text style={styles.name}>{user.name}</Text>
          <Text
            style={styles.address}
          >{`${user.address.addressLine}\n${user.address.city},\n${user.address.zip},\n${user.address.country}`}</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => confirmDelete(index)}
          >
            <Text style={[styles.buttonText, { color: "white" }]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addressCard: {
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#eaeaea",
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
    width: "90%",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "#071a52",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    color: "#fff",
  },
});
