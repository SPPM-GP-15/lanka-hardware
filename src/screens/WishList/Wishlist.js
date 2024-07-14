import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import ProductCard from "../../components/wishlist-product/ProductCard";

export default function Wishlist() {
  return (
    <ScrollView
      vertical
      showsVerticalScrollIndicator={true}
      style={styles.container}
    >
      <Text style={styles.txt}>Products</Text>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    marginVertical: 20,
    fontSize: 20,
    marginLeft: 20,
    fontWeight: "600",
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
