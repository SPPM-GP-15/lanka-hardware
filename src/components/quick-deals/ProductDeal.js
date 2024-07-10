import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function ProductDeal({ item }) {
  const { image, title, price, description, discountedPrice } = item;
  return (
    <View style={styles.itemCard}>
      <Image source={{ uri: image }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemDescription} numberOfLines={2}>
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
    width: 150,
    height: 240,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  itemImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    marginBottom: 8,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  itemTitle: {
    marginHorizontal: 5,
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemDescription: {
    marginHorizontal: 5,
    fontSize: 12,
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 14,
    marginHorizontal: 5,
    fontWeight: "bold",
  },
  originalPrice: {
    fontSize: 12,
    marginHorizontal: 5,
    textDecorationLine: "line-through",
    color: "#999",
  },
});
