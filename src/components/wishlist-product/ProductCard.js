import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = () => {
  return (
    <View style={styles.productCard}>
      <Image
        source={{ uri: "https://i.ibb.co/m66q98Y/dulux-paint.jpg" }}
        style={styles.productImage}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>Dulux Paint</Text>
        <Text style={styles.productColor}>Color: Black</Text>
        <Text style={styles.productPrice}>Rs. 4500</Text>
        <Text style={styles.productDescription}>
          Premium quality interior paint available.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  productInfo: {
    paddingHorizontal: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productColor: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
  },
});

export default ProductCard;
