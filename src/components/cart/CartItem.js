import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

const CartItem = ({ item, removeItemFromCart }) => {
  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.product.imageUrl }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.product.name}</Text>
        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
        <Text style={styles.itemPrice}>
          Rs. {item.product.newPrice}.00 per item
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => removeItemFromCart(item.product._id)}
        style={styles.deleteButton}
      >
        <Icon name="trash" color="#fff" size={15} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    padding: 10,

    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  itemDetails: {
    marginLeft: 16,
    flex: 1,
  },
  itemName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    width: "95%",
  },
  itemQuantity: {
    fontSize: 14,
    color: "#555",
    marginTop: 7,
  },
  itemPrice: {
    fontSize: 14,
    color: "#222",
    marginTop: 7,
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    padding: 5,
    borderRadius: 5,
  },
});

export default CartItem;
