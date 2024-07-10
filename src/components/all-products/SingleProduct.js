import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function SingleProduct({ item }) {
  const { image, title, price, description, discountedPrice } = item;
  return (
    <View style={styles.itemCard}>
      <Image source={{ uri: image }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemDescription} numberOfLines={3}>
        {description}
      </Text>
      <Text style={styles.itemPrice}>Rs. {price}</Text>
      {discountedPrice && (
        <Text style={styles.originalPrice}>Rs. {discountedPrice} </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  itemImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 13,
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  originalPrice: {
    fontSize: 13,
    textDecorationLine: "line-through",
    color: "#999",
  },
});
