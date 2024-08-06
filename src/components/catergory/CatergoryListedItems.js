import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import SingleProduct from "../all-products/SingleProduct";
import { useNavigation } from "@react-navigation/native";

export default function CategoryListedItems({ type, products }) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    let filtered = products.filter((product) =>
      product.category.name.toLowerCase().includes(type.toLowerCase())
    );
    setAllProducts(filtered);
  }, [type, products]);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.resultsContainer}>
        <Text style={styles.title}>{type} Items</Text>
      </View>

      <View style={styles.grid}>
        {allProducts.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemCard}
            onPress={() => navigation.navigate("DetailProduct", { item })}
          >
            <SingleProduct item={item} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  resultsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginLeft: 14,
    fontWeight: "600",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 50,
  },
  itemCard: {
    width: "48%",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
});
