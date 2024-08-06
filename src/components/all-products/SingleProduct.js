import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import React, { useState } from "react";

export default function SingleProduct({ item }) {
  const { imageUrl, name, newPrice, description } = item;
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.itemCard}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.itemImage}
          onLoad={() => setLoading(false)}
        />
        {loading && (
          <ActivityIndicator style={styles.loadingIndicator} size="small" />
        )}
      </View>
      <Text style={styles.itemTitle}>{name}</Text>
      <Text style={styles.itemDescription} numberOfLines={3}>
        {description}
      </Text>
      <Text style={styles.itemPrice}>Rs. {newPrice}.00</Text>
      {item.discountedPrice && (
        <Text style={styles.originalPrice}>Rs. {item.discountedPrice}</Text>
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
  imageContainer: {
    width: "100%",
    height: 150,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  itemImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: "absolute",
  },
  loadingIndicator: {
    position: "absolute",
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 12,
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
  originalPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    color: "#999",
  },
});
