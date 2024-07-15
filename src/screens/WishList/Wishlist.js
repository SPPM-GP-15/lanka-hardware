import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import ProductCard from "../../components/wishlist-product/ProductCard";

export default function Wishlist() {
  return (

    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ScrollView>

  );
}

const styles = StyleSheet.create({

  screen: {},
  container: {
    marginBottom: 20,
    marginTop: 30,

  },
});
