import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AddressCard({
  index,
  address,
  handleDefault,
  confirmDelete,
}) {
  return (
    <View style={styles.addressCard}>
      <View style={styles.actions}>
        <View style={styles.addressInfo}>
          <Text style={styles.name}>{address.name}</Text>
          <Text style={styles.address}>{address.address}</Text>
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
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => handleDefault(index)}
          style={[
            styles.defaultButton,
            address.default ? styles.defaultButtonActive : null,
          ]}
        >
          <Text style={{ fontSize: 12, color: "#fff" }}>
            {address.default ? "Default" : "Set as Default"}
          </Text>
        </TouchableOpacity>
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
  defaultButton: {
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "#06061b",
    justifyContent: "center",
    alignItems: "center",
  },
  defaultButtonActive: {
    backgroundColor: "#3a9b7d",
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
